import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Sigup = () => {
    const auth = getAuth();
    const register= async(e)=>{
        e.preventDefault();
  try {
    const fire = await createUserWithEmailAndPassword(auth, email, password)
    console.log("fire",fire)
  } catch (error) {
    console.log("err" ,error)
  }
    }
const [email,setemail]=useState("")
const [password,setPassword]=useState("")
  return (
    <div>
        <form action="" onSubmit={register}>
        <h1>Sign up</h1>
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

export default Sigup