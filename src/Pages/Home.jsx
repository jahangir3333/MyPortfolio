import '../App.css';
import profilepic from '../Assets/profilepicchatgpt.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
     <Navbar/>
  <div class="container-fluid px-0">
    <div class="welcome-screen d-flex bg-secondary-subtle p-5" id='welcome-screen'>

      <div class="content w-50 mx-auto my-5" style={{ height: '58vh' }}>
        <h1>Hi</h1>
        <h1>I'm <span style={{ color: 'orangered' }}>Md Jahangir Hussain</span></h1>
        <h1>A Web Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam ab nesciunt? Numquam incidunt qui
          modi odit facere tempora pariatur, doloribus aut voluptatum. Rerum maiores laudantium mollitia est, amet
          recusandae.</p>
        <span class="d-flex gap-4">

          <button class="btn btn-dark fw-bold">Hire Me</button>
          <Link class="btn fw-bold text-white" to='/experience' style={{ backgroundColor: 'orangered' }}>Experience</Link>
        </span>
      </div>
      <div class="profile-pic">
        <img src={profilepic} class="img-thumbnail rounded-circle" alt="Profile Pic" height="300" width="300" />
      </div>
    </div>
    <div class="about-me d-flex bg-dark text-white p-5">
      <div class="profile-pic">
        <img src={profilepic} class="rounded-circle" alt="Profile Pic" height="400" width="300" style={{boxShadow:'0px 0px 40px orangered'}} />
      </div>
      <div class="content w-50 mx-auto my-4" style={{ height: '70vh' }}>
        <h1>About <span style={{color:'orangered'}}>Me</span></h1>
        <h1 style={{ color: 'orangered' }}>Web Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam ab nesciunt? Numquam incidunt qui
          modi odit facere tempora pariatur, doloribus aut voluptatum. Rerum maiores laudantium mollitia est, amet
          recusandae.</p>
        <span class="d-flex gap-4">

          <Link class="btn btn-light fw-bold border-0" to='/experience' style={{backgroundColor:'orangered'}}>Experience</Link>
        </span>
      </div>
    </div>
    <div class="contact-me w-50 mx-auto text-center p-5" id='contact-me'>
      <h1 class="fs-2">Contact <span style={{color:'orangered'}}>Me</span></h1><br/>
        <form action="contactme.php" method="post">
          <input type="text" name="full_name" id="" placeholder='Full Name'/><br/>
          <input type="email" name="email" id="" placeholder='Email'/><br/>
          <input type="number" name="phone_number" id="" placeholder='Phone Number'/><br/>
          <input type="text" name="subject" id="" placeholder='Subject'/><br/>
          <textarea name="message" id="" placeholder="Message" rows="7" cols="50"></textarea><br/>
          <button type="submit" class="btn btn-dark">Send Message</button>
        </form>
        <a className='btn btn-secondary position-absolute end-0' href='#welcome-screen'>Go to top</a>
    </div>
  </div>
  <Footer/>
    </>
  )
}

export default Home