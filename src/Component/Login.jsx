import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {


const auth = getAuth();

const login = async(e)=>{
  e.preventDefault();
  try{
const logfire = await signInWithEmailAndPassword(auth, email, password)
console.log(logfire)
  }catch(error){
console.log(error)
  }
}

    const [email,setemail]=useState("")
const [password,setPassword]=useState("")
  return (
    <div>
              <form action="" onSubmit={login}>
        <h1>Login</h1>
<label htmlFor="">Email
    <input type="email" placeholder='enter the Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
</label>
<label htmlFor="">password
    <input type="text" placeholder='enter the password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
</label>
<button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default Login
