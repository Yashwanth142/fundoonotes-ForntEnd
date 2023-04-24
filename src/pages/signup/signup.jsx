import React from "react";
import "./signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { SignUp } from "../../services/userservices";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[A-Za-z0-9]+([.+-][A-Za-z0-9]+)*@[A-Za-z0-9]+[.][a-z]{3,}$/
const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/

export default function Signup() {
  const navigate = useNavigate();
  const [signupObj, setsignupObj] = React.useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmpassword: ""
})

const [validityObj, setValidityObj] = React.useState({
    emailHelper: "",
    EmailError: false,
    passwordHelper: "",
    PasswordError: false,
    firstNameHelper: "",
    FirstNameError: false,
    lastNameHelper: "",
    LastNameError: false,
    confirmPasswordHelper: "",
    confirmPasswordError: false,
})

function Email(event) {
  setsignupObj((prev) => { return { ...prev, email: event.target.value } })
}
function Password(event) {
  setsignupObj((prev) => { return { ...prev, password: event.target.value } })
}
function firstname(event) {
  setsignupObj((prev) => { return { ...prev, firstname: event.target.value } })
}
function lastname(event) {
  setsignupObj((prev) => { return { ...prev, lastname: event.target.value } })
}
function confirmpassword(event) {
  setsignupObj((prev) => { return { ...prev, confirmpassword: event.target.value } })
}

async function Submit(sb) {
  let EmailValid = emailRegex.test(signupObj.email)
  let passwordValid = passwordRegex.test(signupObj.password)
  let firstnameValid = firstnameRegex.test(signupObj.firstname)
  let lastnameValid = lastnameRegex.test(signupObj.lastname)
  let confirmpasswordValid = passwordRegex.test(signupObj.confirmpassword)

  console.log(signupObj)

  if (!EmailValid) {
      setValidityObj(prev => { return { ...prev, EmailError: true, emailHelper: "Invalid email" } })
  } else {
      setValidityObj(prev => { return { ...prev, EmailError: false, emailHelper: "" } })
  }

  if (!passwordValid) {
      setValidityObj(prev => { return { ...prev, PasswordError: true, passwordHelper: "Invalid password" } })
  } else {
      setValidityObj(prev => { return { ...prev, PasswordError: false, passwordHelper: "" } })
  }
  
  if (!confirmpasswordValid) {
    setValidityObj(prev => { return { ...prev, confirmPasswordError: true, confirmPasswordHelper: "Invalid confirm Password" } })
  } else {
    setValidityObj(prev => { return { ...prev, confirmPasswordError: false, confirmPasswordHelper: "" } })
  }

  if (!firstnameValid) {
      setValidityObj(prev => { return { ...prev, FirstNameError: true, firstNameHelper: "Invalid firstname" } })
  } else {
      setValidityObj(prev => { return { ...prev, FirstNameError: false, firstNameHelper: "" } })
  }

  if (!lastnameValid) {
      setValidityObj(prev => { return { ...prev, LastNameError: true, lastNameHelper: "Invalid lastname" } })
  } else {
      setValidityObj(prev => { return { ...prev, LastNameError: false, lastNameHelper: "" } })
  }

  if (signupObj.password !== signupObj.confirmpassword) {
      setValidityObj(prev => { return { ...prev, confirmPasswordError: true, confirmPasswordHelper: "Password does not match" } })
  }

  if(EmailValid === true) {
    let response = await SignUp(signupObj)
    console.log(response)
    await navigate('/')
  }
 
}

function signin(){
navigate('/')
}

  return (
    <div className="signupcontainer">


  <div className="firstcontainer">

        <div className="google1">Google</div>
        <div className="createnew">Create your Google Account</div>

    <div className="inputbox1">
        <div className="inputfield1">
          <TextField
            className="firstname"
            label="First name"
            variant="outlined"
            error = {validityObj.FirstNameError}
            helperText={validityObj.firstNameHelper}
            onChange={firstname}
          />
        </div>

        <div className="inputfield2">
          <TextField
            className="secondname"
            label="Last name"
            variant="outlined"
            error = {validityObj.LastNameError}
            helperText={validityObj.lastNameHelper}
            onChange={lastname}
          />
        </div>
    </div> 

 <div className="inputfield3">       
          <TextField 
          className="username" 
          label="Username" 
          variant="outlined" 
          error = {validityObj.EmailError}
          helperText={validityObj.emailHelper}
          onChange={Email}
        />
 </div> 

<div className="inputbox2">
        <div className="inputfield4">
          <TextField
            className="password1"
            label="Password"
            variant="outlined"
            error = {validityObj.PasswordError}
            helperText={validityObj.passwordHelper}
            onChange={Password}
          />
        </div>

        <div className="inputfield5">
          <TextField
            className="confirm"
            label="Confirm Password"
            variant="outlined"
            error = {validityObj.confirmPasswordError}
            helperText={validityObj.confirmPasswordHelper}
            onChange={confirmpassword}
          />
        </div>
</div> 

<div className="showpassword">
          <div className="check">
          <Checkbox defaultChecked/>
          </div>
          <div className="showpassword">Show password</div>       
</div>


<div className="signinstead" >
          <div className="abc" onClick={signin}>Sign in instead </div>
     
          <div><Button className="clickbutton" onClick={Submit} variant="contained">Next </Button></div>
    </div>

  </div>

  <div className="secondcontainer">
        <div>
        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" height="244" width="244" alt="Google" />
        </div>
        <p>One account. All of Google working for you.</p>
  </div> 

</div>

  );
}