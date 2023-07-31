import React from 'react';
import { Project } from './Project';
import { Helmet } from 'react-helmet-async';


const Portfolio = () => {
    // const cardStyle = {
    //     width: '18rem',
    // };


    return (
        <div className='main-container'>
            <Helmet>
                <title>Sawako Goshima | Portfolio</title>
            </Helmet>
            <div className='title-container'>
                <h1>Portfolio</h1>
            </div>

            <div className="row project-container">
                {Project.map((value, key) => {
                    return (
                        <div className="col-md-4 card-container">
                            <div className="card h-100 card-style" key={key}>
                                <img className="card-img-top project-img" src={value.siteImg} alt="project" />
                                <div className=" d-flex flex-column card-body">
                                    <h5 className="card-title" style={{ fontWeight: "bold" }}>{value.title}</h5>
                                    <p className="card-text"><span style={{ fontWeight: "bold" }}>Role: </span>{value.role} <br />
                                        <span style={{ fontWeight: "bold" }}>Tool: </span> {value.tool}</p>
                                    <div className='linkBtn-container mt-auto'>
                                        <a href={value.siteLink} className="btn btn-danger" id="websiteLink">Website</a>
                                        <a href={value.gitHubLink} className="btn btn-light" id="githubLink">GitHub</a>
                                    </div>

                                </div>
                            </div>
                        </div>


                    )
                })}


            </div>


        </div>

    )
}

export default Portfolio;