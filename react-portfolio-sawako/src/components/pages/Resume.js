import React from 'react'
import resume from '../../images/SawakoGoshimaResume.pdf';
import { Helmet } from 'react-helmet-async';


const Resume = () => {
    return (
        <div className='main-container'>
            <Helmet>
                <title>Sawako Goshima | Resume</title>
            </Helmet>
            <div className='title-container'>
                <h1>Resume</h1>
            </div>
            <p className='dwnloadText'><a href={resume} download="SawakoGoshima_resume.pdf">Download my resume</a></p>
            <div className='frontEnd-skills-container'>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>responsive design</li>
                    <li>Reactjs</li>
                    <li>Bootstrap</li>
                    <li>WordPress</li>
                </ul>
            </div>
            <div className='backEnd-skills-container'>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL, Sequlize</li>
                    <li>MongoDB, mongoose</li>
                    <li>graphQL</li>
                    <li>REST</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume