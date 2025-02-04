import React, { useState } from 'react'
import './login.css'
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc} from 'firebase/firestore';
import upload from '../lib/upload';
const Login = () => {
    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const[loading, setloading] = useState(false)
    const handleAvatar = e => {
        if(e.target.files[0]){
        setAvatar({ 
            file: e.target.files[0], 
            url: URL.createObjectURL(e.target.files[0])
        })
    }
}

const handleRegister =  async (e) => {
    e.preventDefault()
    setloading(true)
    const formData = new FormData(e.target);

    const {Username, email, password }= Object.fromEntries(formData);

    try{
        const res = await  createUserWithEmailAndPassword(auth, email, password);
        

        const imgUrl = await upload(avatar.file)

        await setDoc(doc(db, "users", "resusers.uid"), {
           username:Username,
           email:email,
           avatar:imgUrl,
           id: res.user.uid,
           blocked:[],

        });


        await setDoc(doc(db, "userchats", "resusers.uid"), {
            chats:[]
 
         });

        toast.success("Acoount created successfully, You can login Now")
    }catch(err){
        console.log(err);
        toast.error(err.message)
    }finally{
        setloading(false);
    }
   
}

const handleLogin = async (e)=> {
    e.preventDefault();
    setloading(true);

    const formData = new FormData(e.target);

    const {email, password }= Object.fromEntries(formData);


    try{


        await signInWithEmailAndPassword(auth,email,password)
    }catch(err){
        console.log(err);
        toast.error(err.message)
    }
    finally{
        setloading(false)
    }
}

  return (
    <div className="login">
    <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loading}>{loading ? "Loading":"Sign In"}</button>
        </form>
    </div>
    <div className="separator"></div>
    <div className="item">
    <h2> Create an Account </h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image</label>
           
        <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder="Username" name="Username" />
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button  disabled={loading}>{loading ? "Loading":"Sign Up"}</button>
        </form>
    </div>
    </div>
  )
}

export default Login;
