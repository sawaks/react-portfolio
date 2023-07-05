import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (


        <footer>
            <div className='icon-container'>
                <div className='githubIcon-container'>
                    <a href="https://github.com/sawaks"><GitHubIcon style={{ fontSize: "200%" }} /></a>

                </div>
                <div className='linkedInIcon-container'>
                    <a href="https://www.linkedin.com/in/sawako-goshima"><LinkedInIcon style={{ fontSize: "200%" }} /></a>

                </div>
                <div className='facebookIcon-container'>
                    <a href="https://www.facebook.com/sawako.goshima/"><FacebookIcon style={{ fontSize: "200%" }} /></a>

                </div>
            </div>
            <div className='copyText-container'>
                <p>©2023/Sawako Goshima/All Right Reserved</p>
            </div>

        </footer>

    )
}

export default Footer