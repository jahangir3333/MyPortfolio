import React from 'react'
import Navbar from '../Components/Navbar'
import alinaproject from '../Assets/alinaprojectimage.png'
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
                            <p class="card-subtitle fst-italic">- Wizklub Pvt Ltd</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
                            <button class="btn btn-primary">Visit Project</button>
                        </div>
                    </div>

                        <div class="card shadow text-white" style={{ width: '18rem',backgroundColor:'tomato' }}>
                        <img class="card-img-top" src='https://assets.wizklub.com/images/wizklub/pages/wizklub-futurz/wiz-futurz-logo.png' alt="Card cap" height="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Project 2</h5>
                            <p class="card-subtitle fst-italic">- Wizklub Pvt Ltd</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
                            <button class="btn btn-primary">Visit Project</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </>

    )
}

export default Projects