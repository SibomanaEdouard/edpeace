const express=require('express');
const bcrypt=require("bcrypt");
const Routed=express();
const Users=require('../models/users');

//this is to insert the user in database

Routed.post('/', async (req, res) => {
  const saltRound = 10;
  const { firstname, lastname, email, phone, password } = req.body;
  try {
    const checkingAvail = await Users.findOne({ email });
    const checkingPhone = await Users.findOne({ phone });
    if (!checkingAvail || !checkingPhone) {
      console.log("The user " + lastname + " was created!");
      const salt = await bcrypt.genSalt(saltRound);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUsers = new Users({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword,
      });
      await newUsers.save();
      res.status(201).json({ message: "The data was saved successfully" });
    } else {
      const error =
        "The email or phone number you entered is already found in the system. Please change phone or email and try again!";
      res.status(400).json({ error });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "The email or phone number you entered is already found in the system. Please change phone or email and try again!" });
  }
});



Routed.get('/login',function(req,res){
  res.send("It is working fine");
})
//To validate the user
Routed.post('/login',async(req,res)=>{
const {email,password}=req.body;
const findUser= await Users.findOne({email});
if(findUser){
const storedPassword=findUser.password;

//compare the stored password and entered password;
  const comparePasswords=await bcrypt.compare(password,storedPassword);
  if(comparePasswords){
    console.log("fine")
    res.send("FIne");
  } 
  else{
    
    const error = "Invalid email or password ! Please check and try again!";
    return res.status(400).json({error})
  }

}
else{
  res.status(404).json({error});
}

})
module.exports=Routed;