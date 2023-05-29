import './About.css';


function About() {
  return (
    <div className='about-container' id='AboutUs'>
      <div className='left'>
        <div>
          <h1>About</h1>
          <h1>Us</h1>
        </div>
        <div className='about-span'>
          <span>
            At VeganHof, we believe that everyone deserves to enjoy delicious, nutritious food that is also good for the planet. That's why we're committed to providing high-quality, organic vegan proteins that are made with care and attention to detail.
          </span>
        </div>
        <div>
          <a href='/AboutUs'>LEARN MORE</a>
          <a href='#ContactUs'>Contact Us</a>
        </div>
      </div>
      <div className='right'>
          <div>
            <img src={process.env.PUBLIC_URL + './images/About/about3.svg'} alt="" />
          </div>
      </div>
    </div>
  );
}

export default About;