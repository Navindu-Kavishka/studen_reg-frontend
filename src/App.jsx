// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import StudentForm from './components/studentForm';
import StudentTable from './components/StudentTable';


const App = () => {
  //
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <StudentForm/>
        </div>

        <div className="col-md-6">
        
        </div>

      </div>

      <div className="row mt-4">
          <StudentTable/>
      </div>

    </div>
  )
}

export default App

