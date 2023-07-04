import React from 'react';

import profileImg from '../../images/sawako-photo.jpg'

const AboutMe = () => {
    return (

        <div className='main-container'>
            <div className='title-container'>
                <h1>About Me</h1>
            </div>

            <div className='row'>
                <div className='img-container'>
                    <img src={profileImg} className='profileImg' />
                </div>
                <div className='text-container'>
                    <p>With over 5 years of experience as an E-Commerce Contents Director in Tokyo, Japan, I have successfully
                        created compelling content that has stimulated consumer activity. During this time, I honed my skills in
                        crafting engaging and impactful digital experiences.<br />Currently, I am working as a freelanced web
                        developer to build up a web using WordPress (created the original theme using PHP). And also I am working as a
                        part-time Spa Therapist specializing in remedial massage at a prestigious 5-star hotel in Australia. My
                        passion for this industry lies in ensuring the utmost satisfaction of each client I serve.<br />However, my
                        true passion lies in leveraging the power of web services to make a significant impact on a larger scale. I
                        aspire to become a web developer, using my skills and expertise to create immersive online experiences that
                        delight and satisfy a vast number of clients across various devices.<br />To pursue my passion, I proactively
                        studied web development for two years before enrolling in The Coding Boot Camp at the University of Sydney.
                        This intensive program equipped me with comprehensive knowledge and practical skills, further strengthening my
                        foundation in web development.<br />I am now ready to embark on a new journey, combining my creative content
                        creation background, client-focused mindset, and technical expertise to build innovative and user-centric web
                        solutions. I am eagerly seeking opportunities where I can contribute my skills and passion to create
                        exceptional digital experiences for clients worldwide.
                        <br />Thank you.
                    </p>

                </div>
            </div>


        </div>
    )
}

export default AboutMe;