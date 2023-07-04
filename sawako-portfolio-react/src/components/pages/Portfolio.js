
import { Project } from './Project';


const Portfolio = () => {
    // const cardStyle = {
    //     width: '18rem',
    // };


    return (
        <div className='main-container'>
            <div className='title-container'>
                <h1>Portfolio</h1>
            </div>

            <div className="row project-container">
                {Project.map((value, key) => {
                    return (
                        <div className="col-md-4">
                            <div className="card card-style" key={key}>
                                <img className="card-img-top project-img" src={value.siteImg} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">Role: {value.role} <br />Tool: {value.tool}</p>
                                    <div className='linkBtn-container'>
                                        <a href={value.siteLink} className="btn btn-primary" id="websiteLink">Website</a>
                                        <a href={value.gitHubLink} className="btn btn-primary" id="githubLink">GitHub</a>
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