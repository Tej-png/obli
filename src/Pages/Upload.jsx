import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import UploadForm from '../components/UploadForm.jsx/UploadForm'

const Upload = ({width}) => {
  return (
    <div className="upload-form">
        <NavBar width={width}></NavBar>
        <div className="upload-content row">
        <UploadForm></UploadForm>
        </div>
        
        
        
    </div>
  )
}

export default Upload