import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Zarina</h2>
          <div className='prompt'> <p>A software developer with a passion for growing and creating.</p>
          <a href="https://github.com/ZarinaPanf?tab=repositories" 
            rel="github link" 
            target="_blank">
            <GitHubIcon />
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
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS, Redux, NPM, MaterialUI, StyledComponents</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Typescript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;