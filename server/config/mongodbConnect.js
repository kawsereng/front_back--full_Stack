
const mongoose = require('mongoose');

const mongodbConnection =()=>{
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{

  console.log("database conected😎");
  
})

}
module.exports = mongodbConnection