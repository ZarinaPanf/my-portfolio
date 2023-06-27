import React from 'react';
import {useParams} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";
import { projectList } from '../helpers/ProjectList';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt='project'/>
        <p><b>Skills:</b> {project.skills}</p>
        <div>
        <a href={project.link} rel="github link" target="_blank">
        <GitHubIcon />
        </a>
        <a href={project.presentation} rel="netlify link" target="_blank">
        <FolderSpecialIcon />
        </a>
        </div>
    </div>
  )
}

export default ProjectDisplay;