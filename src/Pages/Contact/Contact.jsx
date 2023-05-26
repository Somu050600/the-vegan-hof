import './Contact.css';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

function Contact() {
  return (
    <div className='contact-container'>
      <Navbar />
      <div className='form-container'>
        <div className='form-left-container'>
          <form action="">
            <div className='fle'><h1>Contact Us</h1></div>
            <div><span>Feel free to contact us any time. We will get bact to you as soon as we can!</span></div>
            <div className='fle'>
              <input type="text" placeholder="Name" id='name' />
            </div>
            <div className='fle'>
              <input type="email" placeholder="Email" id='email' />
            </div>
            <div className='fle'>
              <input type="text" placeholder="Message" id='message' />
            </div>
            <button type="submit" id="send-btn" className='fle'>SEND</button>
          </form>
        </div>
        <div className='form-right-container'>
          <div className='fre'><h1>Info</h1></div>
          <div className='fre'>
            <img src={process.env.PUBLIC_URL + './images/Contact/email.svg'} alt="" width="30px" height="30px" />
            <span>kontakt@proteinbot.de </span>
          </div>
          <div className='fre'>
            <img src={process.env.PUBLIC_URL + './images/Contact/phone.svg'} alt="" width="30px" height="30px" />
            <span>+49 (0)69 959 325 048</span>
          </div>
          <div className='fre'>
            <img src={process.env.PUBLIC_URL + './images/Contact/office.svg'} alt="" width="30px" height="30px" />
            <span>Kurt-Blaum-Platz 8, 63450 Hanau, Germany</span>
          </div>
          <div className='fre'>
            <img src={process.env.PUBLIC_URL + './images/Contact/clock.svg'} alt="" width="30px" height="30px" />
            <span>09:00 - 18:00</span>
          </div>
        </div>
        <div className='forn-media-icons'>
          <img src={process.env.PUBLIC_URL + './images/footer/facebook.svg'} width="20px" height="20px"/>
          <img src={process.env.PUBLIC_URL + './images/footer/twitter.svg'} width="20px" height="20px"/>
          <img src={process.env.PUBLIC_URL + './images/footer/instagram.svg'} width="20px" height="20px"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;