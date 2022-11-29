import React from 'react'
// import Linkedin from "@material-ui/icons/LinkedIn"
import Email from "@material-ui/icons/Email"
import PhoneIcon from '@material-ui/icons/Phone';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">    
            <a href="mailto:sadwinbrunas007@gmail.com"><Email/></a>
            <PhoneIcon/>
            <p>(+91) 8248920356</p>
        </div>
        <p>&copy; SADWIN BRUNAS</p>
    </div>
  )
}

export default Footer