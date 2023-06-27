import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/panfilova.zr" 
            rel="instagram link" 
            target="_blank">
            <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/zarina-panfilova-90947310a/" 
            rel="linkedin link" 
            target="_blank">
            <LinkedInIcon />
            </a>
            <a href="mailto:zhiyenbayeva.z@gmail.com"
            rel="github link" 
            target="_blank">
              <EmailIcon />
            </a>
        </div>
        <p> &copy; 2023 zarina panfilova</p>
    </div>
  )
}

export default Footer;