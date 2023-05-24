import './Footer.css';


function Footer() {
  return (
    <footer id="footer">
      <div className="footer-div">
        <div className="footer-span-div">
          <span>2023 © Musclestadt Sporternährung GmbH. All Rights Reserved. Made in Germany.</span>
        </div>
        <div className="footer-img-div">
          <a href="http://theveganhof.com/"><img src={process.env.PUBLIC_URL + './images/footer/facebook.svg'} alt="" /></a>
          <a href="http://theveganhof.com/"><img src={process.env.PUBLIC_URL + './images/footer/twitter.svg'} alt="" /></a>
          <a href="http://theveganhof.com/"><img src={process.env.PUBLIC_URL + './images/footer/instagram.svg'} alt="" /></a>
          <a href="http://theveganhof.com/"><img src={process.env.PUBLIC_URL + './images/footer/rss-feed.svg'} alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;