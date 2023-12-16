import React, { useState } from 'react'
import './Layout.css'

function Layout() {
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    course: "",
    place: "",
    email: ""
  })
  const submitForm = (e) => {
    e.preventDefault();

    const { name, gender, course, place, email } = student;
    if (!name || !gender || !course || !place || !email) {
      alert('Please fill the form completely')
    }
    else {
      console.log("====student details====");
      console.log(student);
      alert('Success')
    }
  }

  return (
    <>
      <div className='box'>

        <form className='form' onSubmit={submitForm}>
          <div>
            <label className='label'>Name</label>
            <input className='input' type="text" placeholder=' Enter Your Name' onChange={(e) => setStudent({ ...student, name: e.target.value })} />
          </div>

          <div className='top'>
            <label className='label' style={{ paddingRight: "30px" }}>Gender</label>
            <input type="radio" name='gender' value={"male"} onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
            <label>Male</label>
            <input style={{ marginLeft: "20px" }} type="radio" name='gender' value={"female"} onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
            <label>Female</label>
            <input style={{ marginLeft: "20px" }} type="radio" name='gender' value={"others"} onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
            <label>Others</label>
          </div>

          <div className='top'>
            <label className='label'>Course</label>
            <select name="" id="" onChange={(e) => setStudent({ ...student, course: e.target.value })}>
              <option value="">Select</option>
              <option value="BBA">BBA</option>
              <option value="BCA">BCA</option>
              <option value="EEE">EEE</option>
              <option value="BTech">BTech</option>
              <option value="Diploma">Diploma</option>
              <option value="ITI">ITI</option>
            </select>

            <label style={{ paddingLeft: "40px" }}>Place</label>
            <input className='inputPlace' type="text" placeholder=' Enter Your Place' onChange={(e) => setStudent({ ...student, place: e.target.value })} />
          </div>

          <div className='top'>
            <label className='label'>Email</label>
            <input className='input' type="text" placeholder=' Enter Your Email' onChange={(e) => setStudent({ ...student, email: e.target.value })} />
          </div>

          <button className='btn' type='submit'>SUBMIT</button>
        </form>

      </div>
    </>
  )
}

export default Layout