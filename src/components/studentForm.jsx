import React from 'react'

const studentForm = () => {
  
    return (
    <form onSubmit={null}>
        <h3>Register Student</h3>
        <div className="form-group">
            <label htmlFor="stdName">Name : </label>
            <input type="text" name="name" id="stdName" required/>

            <label htmlFor="age">Age : </label>
            <input type="text" name="age" id="age" required/>
            
            <label htmlFor="stdContact">Contact : </label>
            <input type="text" name="stdContact" id="stdContact" required/>
            
            <label htmlFor="guardianName">Name : </label>
            <input type="text" name="guardianName" id="guardianName" required/>
            
            <label htmlFor="address">Address : </label>
            <input type="text" name="address" id="address" required/>
            
            <label htmlFor="guardianContact"></label>
            <input type="text" name="guardianContact" id="guardianContact" required/>

        </div>
        <button type="submit" className='btn btn-primary mt-3'>Register</button>
    </form>
  );

}

export default studentForm
