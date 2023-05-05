import React from "react";
import { useState } from "react";
// import SignInForm from "./signin";
// import { type } from "@testing-library/user-event/dist/type";


//this is function to orient us to home  page
function homer(e){
    e.preventDefault();
    window.location.href='/';
}
//to sign in page
const HandleSigning=(e)=>{

    e.preventDefault();
    window.location.href='/sign';
}

//this is the login in foprm
function LoginForm() {
    const [inputs, setInputs] = useState({email:"",password:""});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    //to feth data from login page
    const FetLogin = async(event)=>{
      event.preventDefault();

      try{

      const response=await fetch("http://localhost:5500/sign/login",{
        method:"POST",
        headers:{
        "Content-Type":"application/json",  
        },
        body:JSON.stringify(inputs)

      });
      if(response.ok){
        alert(' YES YOU ARE ABOUT TO ENTER ! ');
     setInputs({
      email:"",
      password:""
     });
     
      }
      else{
        
        const ResponseError=await response.json();
        throw new Error(ResponseError.error);
      }
  

    }catch (error){
      console.log(error);
    alert(error);
    }
  }
  
    return (
        <>
        <h1 className="headerlo">Login</h1>
      <div className="form1">
        
        <form onSubmit = {FetLogin}>
          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              id="email"
              required
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password
            <br />
            <input
              type="password"
              name="password"
              id="password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">ENTER</button>
        </form>
        <br/><br/>
        <h1>Do you have account ? <button onClick={HandleSigning}>SIGN</button>
        <button onClick={homer}>HOME</button>
        </h1>
      </div>
      </>
    );
  }
  
  export default LoginForm;
  