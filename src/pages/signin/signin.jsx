import React from 'react'
import './signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SignIn } from '../../services/userservices';
import { Navigate,useNavigate } from "react-router-dom";

const emailRegex = /^[A-Za-z0-9]+([.+-][A-Za-z0-9]+)*@[A-Za-z0-9]+[.][a-z]{3,}$/
const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/

export default function Signin() {
  const navigate = useNavigate();
  const [siginObj,setSiginObj] = React.useState({email:'',password:""})
  const [regexObj, setRegexObj] = React.useState({emailError:false, emailHelper:'', passwordError:false, passwordHelper:''})
  // server accepts json => object , so i can send the state directly to server
  
    const takeEmail = (event) => {
      setSiginObj((prevState)=>({...prevState, email:event.target.value}))
      // we have to make a new obj copying the prevou Obj 
    }
    function takePassword (abc) {
     setSiginObj((prevState)=>({...prevState,password:abc.target.value}))
    } 
  
    const submit = async (submit) => {
      
      let emailTest = emailRegex.test(siginObj.email)
      let passwordTest = passwordRegex.test(siginObj.password)
      
      if(emailTest === false) {
        setRegexObj((prevState)=>({...prevState,emailError:true,emailHelper:'enter correct email'}))
      } else {
        setRegexObj((prevState)=>({...prevState,emailError:false,emailHelper:''}))
      }
  
      if(passwordTest === false) {
        setRegexObj((prevState)=>({...prevState,passwordError:true,passwordHelper:'enter correct password'}))
      } else {
        setRegexObj((prevState)=>({...prevState,passwordError:false,passwordHelper:''}))
      }
  
      if(emailTest === true && passwordTest === true) {
        let response = await SignIn(siginObj)
        localStorage.setItem("token",response.data.data)
        console.log(response)
        await navigate('/Dashboard')
      }
    }

    function signup(){
      navigate('/Signup')
    }

  return (


    <div className='signin'>
        <div className='google'>Google</div>
        <div className='sin'>Sign in</div>
        <div className='useg'>Use your Google Account</div>

        <div className='email'>
        <TextField className='field1' error={regexObj.emailError}  helperText={regexObj.emailHelper} onChange={takeEmail} id="outlined-basic" label="Email or PhoneNo" variant="outlined" />
        </div>

        <div className='password'>
        <TextField className='field2' error={regexObj.passwordError}  helperText={regexObj.passwordHelper} onChange={takePassword} id="outlined-basic" label="Password" variant="outlined" />
        </div>

        <div className='need'>Not your computer? Use Guest mode to sign in privately.</div>
        <div className='learn'>Learn more</div>
        <div className='next' >
          <div onClick={signup}> Create account</div>
           
          <Button variant="contained" onClick= {submit} >Next</Button>
        </div>
    </div>

  )
}
