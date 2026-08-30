import Navbar from '../Components/Navbar'

function Experience() {
  return (
    <>
      <Navbar />
      <div class='container-fluid px-0 py-4 bg-secondary-subtle'>
        <h1 className='text-center m-2 fw-bold' style={{color:'orangered', fontFamily: 'Permanent Marker, cursive'}}>Experience</h1><br/>
        <div class="experiences d-flex flex-wrap justify-content-center gap-4">
          <div class="card shadow" style={{ width: '18rem' }}>
            <img class="card-img-top" src='https://assets.wizklub.com/images/wizklub/pages/wizklub-futurz/wiz-futurz-logo.png' alt="Card cap" height="200px" />
            <div class="card-body">
              <h5 class="card-title">Coding Trainer</h5>
              <p class="card-subtitle fst-italic">- Wizklub Pvt Ltd</p>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
              <button  class="btn btn-primary">View Details</button>
            </div>
          </div>


          <div class="card shadow" style={{ width: '18rem' }}>
            <img class="card-img-top" src='https://nirmaan.org/assets/img/nirmaan-logo.png' alt="Card cap" height="200px" />
            <div class="card-body">
              <h5 class="card-title">Coding Trainer</h5>
              <p class="card-subtitle fst-italic">- Nirmaan Organization</p>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
              <button  class="btn btn-primary">View Details</button>
            </div>
          </div>


          <div class="card shadow" style={{ width: '18rem' }}>
            <img class="card-img-top" src='https://s3-eu-west-1.amazonaws.com/tpd/logos/6217e392835bd2246efef6e0/0x0.png' alt="Card cap" height="200px" />
            <div class="card-body">
              <h5 class="card-title">Coding Instructor</h5>
              <p class="card-subtitle fst-italic">- Codeyoung</p>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore assumenda illo.
                Doloremque eum aliquam inventore? Nemo officia ullam.</p>
              <button  class="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience