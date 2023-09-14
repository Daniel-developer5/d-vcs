const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose')
const UserModel = require('./models/UserModel')
const bcrypt = require('bcrypt')
const axios = require('axios')

// const StreamZip = require('node-stream-zip')

// const zip = new StreamZip.async({
//   file: 't.zip',
// })

// const testZip = async () => {
//   console.log(await zip.entries())
// }

// testZip()

app.use(require('cors')())
app.use(express.json())
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.post('/login', async (req, res) => {
  const { email, password, signIn, username } = req.body
  
  if (signIn) {
    try {
      const user = await UserModel.findOne({ email })
      
      if (user) {
        const isRightPass = await bcrypt.compare(password, user.password)
        
        if (isRightPass) {
          res.send(user)
        } else {
          res.sendStatus(401)
        }
        
        return
      } else {
        res.sendStatus(404)
      }
    } catch (err) {
      res.sendStatus(500)
      return
    }
  } else {
    try {
      const salt = await bcrypt.genSalt(+process.env.SALT)
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new UserModel({ email, username, password: hashedPassword })
  
      await newUser.save()

      const options = {
        headers: {
          'Authorization': `Bearer ${process.env.DROPBOX_TOKEN}`,
        }
      }

      await axios.post('https://api.dropboxapi.com/2/files/create_folder_v2', {
        path: `/dvcs/${username}`,
        autorename: false,
      }, options)

      res.send(newUser)
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }
})

app.listen(PORT)
