import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const Userfrom = () => {
  let navigate = useNavigate()

  const [formInput, setFormValue] = useState({
    Name: '',
    Type: '',
    Weight: '',
    Address: '',
    AadhaarID: ''
  })
  const isDisabled = useMemo(() => {
    return Object.values(formInput).some(input => !input)
  }, [formInput])

  const isNumeric = (str) => {
    if (typeof str != "string") return false
    return !isNaN(str)
  }

  const handleNameChange = (event) => {
    setFormValue({ ...formInput, Name: event.target.value })
  }
  const handleTypeChange = (event) => {
    setFormValue({ ...formInput, Type: event.target.value })
  }
  const handleWeightChange = (event) => {
    setFormValue({ ...formInput, Weight: event.target.value })
  }
  const handleAddressChange = (event) => {
    setFormValue({ ...formInput, Address: event.target.value })
  }
  const handleAadhaarIDChange = (event) => {
    if (isNumeric(event.target.value)) {
      setFormValue({ ...formInput, AadhaarID: event.target.value })
    } else {
      console.log("Non Int Value is not allowed.")
    }
  }


  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("form is submiteed");
    console.log("navigating to ---")
    navigate("/Healthdata")
    console.log("Form submitted with Value: " + formInput.Name + formInput.Type + formInput.Weight + formInput.Address + formInput.AadhaarID)
    setFormValue({
      Name: '',
      Type: '',
      Weight: '',
      Address: '',
      AadhaarID: '',
    })
  }
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">User Form</h3>
                  <form onSubmit={onSubmitForm}>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="Name" className="form-control" value={formInput.Name} onChange={handleNameChange} />
                          <label className="form-label" htmlFor="Name">Name</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="Type" className="form-control" value={formInput.Type} onChange={handleTypeChange} />
                          <label className="form-label" htmlFor="Type">Type</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div className="form-outline datepicker w-100">
                          <input type="text" className="form-control " value={formInput.Weight} onChange={handleWeightChange} />
                          <label htmlFor="Weight" className="form-label">Weight</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" checked />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="Address" id="Address" className="form-control" value={formInput.Address} onChange={handleAddressChange} />
                          <label className="form-label" htmlFor="Address">Address</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="tel" id="Aadhaar  ID" className="form-control" value={formInput.AadhaarID} onChange={handleAadhaarIDChange} />
                          <label className="form-label" htmlFor="Aadhaar  ID">Aadhaar  ID</label>
                        </div>

                      </div>
                    </div>
                    <div className="mt-4 pt-2 text-center">
                      <input className="btn btn-primary btn-lg" disabled={isDisabled} type="submit" value="Submit" />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
