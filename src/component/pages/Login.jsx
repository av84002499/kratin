import React, { useState,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../../utils/utilsMethod';

export const Login = () => {
  let navigate = useNavigate()
  // Write a methd which submit the login form and after succesful verification redirec to it to the user.
  const [formInput, setFormValue] = useState({
    email: '',
    password: ''
  })
  const isDisabled = useMemo(() => {
    return Object.values(formInput).some(input => !input)
}, [formInput])
  const handleemailChange = (event) => {
    // validate email
    setFormValue({ ...formInput, email: event.target.value })
  }
  const handlePasswordChange = (event) => {
    // write a logic for password validator. here i have to validate the password.
    setFormValue({ ...formInput, password: event.target.value })
  }


  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("form is submiteed");
     // get the userdetail from the userList and compare the password 
    // if password matched then 
    console.log("navigating to ---")
    if (checkUser(formInput)){
      navigate("/userfrom")
    }
    console.log("Form submitted with Value: " + formInput.email + " and " + formInput.password)
    setFormValue({
      email: '',
      password: ''
    })
    
  }
  return (
    <div>
      <div className="container-sm">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
              aria-controls="pills-login" aria-selected="true">Login Form</a>
          </li>
        </ul>
        <form onSubmit={onSubmitForm}>
          <div className="form-outline mb-4">
            <input type="email" id="loginName" className="form-control" value={formInput.email} onChange={handleemailChange} />
            <label className="form-label" htmlFor="loginName">Email or username</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="loginPassword" className="form-control" value={formInput.password} onChange={handlePasswordChange} />
            <label className="form-label" htmlFor="loginPassword">Password</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block col-4"disabled={isDisabled}>Sign in</button>
            <div className="text-center">
              <p>Not a member? <a href="Register">Register</a></p>
            </div>
          </div>

        </form>
      </div>

    </div>
  )

}