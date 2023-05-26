import './LandingPage.css';
import ImageSlider from "./ImageSlider";


function LandingPage() {

  const slides = [
    { url: "./images/LandingPage/slider/slide1.png", title: "slide1" },
    { url: "./images/LandingPage/slider/slide2.png", title: "slide2" },
    { url: "./images/LandingPage/slider/slide3.png", title: "slide3" },
    { url: "./images/LandingPage/slider/slide4.png", title: "slide4" },
    { url: "./images/LandingPage/slider/slide5.png", title: "slide5" },
    { url: "./images/LandingPage/slider/slide6.png", title: "slide6" },
  ];
  
  return (
      <div className="landing-page-container">
        <div className="slider-container">
          <ImageSlider slides={slides} />
        </div>
      </div>
  );
}

export default LandingPage;