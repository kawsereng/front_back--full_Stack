require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const User =require('./model/modelData')
const app = express()


app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{

  console.log("database conected😎");
  
})

let port = process.env.PORT ||5000
let pattern=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

app.post('/registration',async (req, res) => {

  let{fullName, email,password,confirmPassword}= req.body

  if(!fullName|| !email|| !password || !confirmPassword){
    return res.status(400).json({
      success:false,
      message: "please fill the all filds "
    })
  }

  if(!pattern.test(email)){
        return res.status(400).json({
      success:false,
      message: "please Enter Valid Email "
    })
  }

  let existingUser = await User.findOne({email:email})
  if(existingUser){
     return res.status(400).json({
      success:false,
      message: "User Already exist "
    })
  }

  if(password !== confirmPassword){
      return res.status(400).json({
      success:false,
      message: "pasword Not match "
    })
  }

      let newUser =new User({
          fullName :fullName,
          email:email,
          password :password,
          confirmPassword: confirmPassword
    })
    newUser.save()
      return res.status(201).json({
      success:true,
      message: "Registration Done "
    }) 

})

// login er jonno
app.post('/login',async (req,res)=>{

      const user = await User.findOne({
        email: req.body.email,
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        })
      }

      if (req.body.password === user.password) {
        res.status(200).json({
          success: true,
          message: 'Login successful'
        });
      }
      else {
        res.status(401).json({
      success: false,
      message: 'Wrong password'
    });;
      }   
})


app.listen(port, () => {
  console.log('runnig port' )
})