import React from 'react'
import Navbar from '../Components/Navbar'
import alinaproject from '../Assets/alinaprojectimage.png'
import project2 from '../Assets/portfolio project.png'
import { Link } from 'react-router-dom'
function Projects() {
    return (
        <>
            <Navbar />
            <div className="container-fluid px-0 py-4 bg-secondary-subtle ">
                <div class="projects d-flex flex-wrap justify-content-center gap-4">
                    <div class="card shadow text-white" style={{ width: '18rem', backgroundColor:'purple' }}>
                        <img class="card-img-top" src={alinaproject} alt="Card cap" height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Alina Online Shopping</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
                            <button class="btn btn-primary">Visit Project</button>
                        </div>
                    </div>

                        <div class="card shadow text-white" style={{ width: '18rem',backgroundColor:'tomato' }}>
                        <img class="card-img-top" src={project2} alt="Card cap" height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">My Portfolio</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
                            <Link class="btn btn-primary" to='https://my-portfolio-six-dusky-16.vercel.app/'>Visit Project</Link>
                        </div>
                    </div>
                </div>
            </div>
            

        </>

    )
}

export default Projects