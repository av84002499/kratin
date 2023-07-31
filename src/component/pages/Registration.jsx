import React, { useState,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
export const Registration = () => {
  let navigate = useNavigate()

  const [formInput, setFormValue] = useState({
    Name: '',
    Email: '',
    Password: '',
    RepeatPassword: ''
  })
  const isDisabled = useMemo(() => {
    return Object.values(formInput).some(input => !input)
}, [formInput])
  const handleNameChange = (event) => {
    setFormValue({ ...formInput, Name: event.target.value })
  }
  const handleEmailChange = (event) => {
    setFormValue({ ...formInput, Email: event.target.value })
  }
  const handlePasswordChange = (event) => {
    setFormValue({ ...formInput, Password: event.target.value })
  }
  const handleRepeatPasswordChange = (event) => {
    setFormValue({ ...formInput, RepeatPassword: event.target.value })
  }
  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("form is submiteed");
    console.log("navigating to ---")
    navigate("/Login")
    console.log("Form submitted with Value: " + formInput.Name + formInput.Email + formInput.Password + formInput.RepeatPassword)
    setFormValue({
      Name: '',
      Email: '',
      Password: '',
      RepeatPassword: ''
    })
    
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className='container-sm'>
          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                aria-controls="pills-login" aria-selected="true">Registation Form</a>
            </li>
          </ul>
          <div className="form-outline mb-4">
            <input type="text" id="registerName" className="form-control" value={formInput.Name} onChange={handleNameChange} />
            <label className="form-label" htmlFor="registerName">Name</label>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="registerEmail" className="form-control" value={formInput.Email} onChange={handleEmailChange} />
            <label className="form-label" htmlFor="registerEmail">Email</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="registerPassword" className="form-control" value={formInput.Password} onChange={handlePasswordChange} />
            <label className="form-label" htmlFor="registerPassword">Password</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" className="form-control" value={formInput.RepeatPassword} onChange={handleRepeatPasswordChange} />
            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block col-4 "disabled={isDisabled}>Registration</button>
          </div>
        </div>
      </form>
    </div>
  )
}