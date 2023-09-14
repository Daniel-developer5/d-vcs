#!/bin/sh

function dvcs() {
  DIRNAME=$(pwd)

  function new_repository() {
    echo "$1 repository in $DIRNAME"
    mkdir .dvcs
  }

  function on_init() {
    if [ -d .dvcs ]; then
        rm -rf .dvcs
        new_repository 'Reinitialized'
      else
        new_repository 'Initialized empty'
    fi
  }

  case $1 in
    help)
      echo 'help'
    ;;
    init)
      on_init
    ;;
    add)
      if [ ! -d .dvcs ]; then
        on_init
      fi

      if [ ! -d .dvcs/add_files ]; then
        mkdir .dvcs/add_files
      fi

      shift 1
      for i in $@
      do
        if [ -d $i ] || [ -f $i ]; then
          if [ $i = "." ]; then
            cp -r `ls -A | grep -v .dvcs` .dvcs/add_files
          else
            cp $i .dvcs/add_files -r
          fi
          
          echo "Added $i"
        else
          echo "$i: ERROR No such file or directory"
        fi
      done
    ;;
    commit)
      if [ ! -d .dvcs/config ]; then
        mkdir .dvcs/config
      fi

      echo COMMIT_MESSAGE=$2 > .dvcs/config/.dvcs-config
    ;;
    push)
      USER="danie"
      REPOSITORY="repository1"

      zip -r .dvcs/pushed.zip .dvcs/
      curl -X POST https://content.dropboxapi.com/2/files/upload --header "Authorization: Bearer drtoken" --header "Dropbox-API-Arg: {\"path\": \"/dvcs/$USER/$REPOSITORY/pushed.zip\", \"mode\": \"add\", \"autorename\": true, \"mute\": false, \"strict_conflict\": false}" --header "Content-Type: application/octet-stream" --data-binary @.dvcs/pushed.zip
      rm -rf .dvcs/pushed.zip
    ;;
  esac
}
