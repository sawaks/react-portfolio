import React from 'react'
import resume from '../images/SawakoGoshima_resume.pdf';

const Resume = () => {
    return (
        <div className='main-container'>
            <div className='title-container'>
                <h1>Resume</h1>
            </div>
            <p><a href={resume} download="SawakoGoshima_resume.pdf">Download my resume</a></p>
        </div>
    )
}

export default Resume