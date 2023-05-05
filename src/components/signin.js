
import { useState } from "react";
// import axios from "axios";
import React from "react";


function loHandle(e){
    e.preventDefault();
    window.location.href='/sign/login';
}

function homer(e){
    e.preventDefault();
    window.location.href='/';
}

function SignInForm(){

 

    const [inputs,setInputs]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:""
    });

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}));
    }
  
    const FetchData=async(event)=>{
        event.preventDefault();
        try{
            const response=await fetch("http://localhost:5500/sign",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(inputs)
            });
            if(response.ok){
                alert("WELCOME TO US ");
                setInputs({
email:"",
firstname:"",
lastname:"",
password:"",
phone:""

});
   window.location.href='/sign/login';
            }
            else{
                // alert("Failed to create user! ");
                const ResponseError=await response.json();
                throw new Error(ResponseError.error);
            }
        }catch (error){
            console.log(error);
            alert(error.message);
        }
    };

    return(
        <div>
            <h1 className="signhead">SIGN IN ENPEC</h1>
            <div className="forms"> 
                <form onSubmit={FetchData}>
                    <label>FirstName</label><br/>
                    <input type="text" 
                           name="firstname" 
                           id="firstname"
                           required
                           value={inputs.firstname}
                           onChange={handleChange}
                    /><br/>

                    <label>LastName</label><br/>
                    <input type="text"
                           name="lastname"
                           id="lastname"
                           required
                           value={inputs.lastname}
                           onChange={handleChange}
                    /><br/>

                    <label>Email</label><br/>
                    <input type="email" 
                           name="email"
                           value={inputs.email}
                           onChange={handleChange}
                           id="email"
                           required
                    /><br/>

                    <label>Phone</label><br/>
                    <input type="tel"
                           name="phone"
                           id="phone"
                           required
                           value={inputs.phone}
                           onChange={handleChange}
                    /><br/>

                    <label>Password</label><br/>
                    <input type="password"
                           name="password"
                           id="password"
                           value={inputs.password}
                           onChange={handleChange}
                    /><br/>

                    <button>COME</button>
                </form>

                <h1>Do you have account? 
                    <button onClick={loHandle}>LOGIN</button>
                    <button onClick={homer}>HOME</button>
                </h1>
            </div>
        </div>  
    )
}

export default SignInForm;
