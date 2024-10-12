// eslint-disable-next-line no-unused-vars
import React from 'react'


const StudentForm = () => {
  
    return (
    <form onSubmit={null}>
        <h4>Student Infomation</h4>
        <hr />
        <div className="form-group">
            <label htmlFor="stdName">Name : </label>
            <input type="text" name="name" id="stdName" required/><br />

            <label htmlFor="age">Age : </label>
            <input type="text" name="age" id="age" required/><br />
            
            <label htmlFor="stdContact">Contact : </label>
            <input type="text" name="stdContact" id="stdContact" required/><br /><br />
            
            <h4>Guardian Infomation</h4>
            <hr />

            <label htmlFor="guardianName">Name : </label>
            <input type="text" name="guardianName" id="guardianName" required/><br />
            
            <label htmlFor="address">Address : </label>
            <input type="text" name="address" id="address" required/><br />
            
            <label htmlFor="guardianContact">Contact : </label>
            <input type="text" name="guardianContact" id="guardianContact" required/><br />

        </div>
        <button type="submit" className='btn btn-primary mt-3'>Register</button>
    </form>
  );

}

export default StudentForm
