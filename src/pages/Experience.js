import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';

function Experience() {
  return (
    <div className='experience'> 
    <VerticalTimeline lineColor='#CBC0D3'>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date="2013 - 2017"
            iconStyle={{background: "#CBC0D3", color: "#fff"}}
            icon={<SchoolIcon />}
            >
            <h3 className='vertical-timeline-element-subtitle'>KTU, Karaganda, KZ</h3>
            <h4>Department Of Information Technologies</h4>
            <h5>Bachelor Degree Diploma</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date="2016 - 2017"
            iconStyle={{background: "#CBC0D3", color: "#fff"}}
            icon={<ComputerIcon />}
            >
            <h3 className='vertical-timeline-element-subtitle'>TOO "EPAM Kazakhstan", Karaganda, KZ</h3>
            <h4>Junior Software Testing Engineer</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date="2017 - 2019"
            iconStyle={{background: "#CBC0D3", color: "#fff"}}
            icon={<ComputerIcon />}
            >
            <h3 className='vertical-timeline-element-subtitle'>TOO "EPAM Kazakhstan", Karaganda, KZ</h3>
            <h4>Junior Software Maintenance Engineer</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date="2019 - 2020"
            iconStyle={{background: "#CBC0D3", color: "#fff"}}
            icon={<ComputerIcon />}
            >
            <h3 className='vertical-timeline-element-subtitle'>TOO "EPAM Kazakhstan", Karaganda, KZ</h3>
            <h4> Software Maintenance Engineer</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--work' 
            date="2020 - present"
            iconStyle={{background: "#CBC0D3", color: "#fff"}}
            icon={<ComputerIcon />}
            >
            <h3 className='vertical-timeline-element-subtitle'>TOO "EPAM Kazakhstan", Karaganda, KZ</h3>
            <h4> Junior Software Engineer</h4>
        </VerticalTimelineElement>

        </VerticalTimeline> 
    </div>
  )
}

export default Experience;