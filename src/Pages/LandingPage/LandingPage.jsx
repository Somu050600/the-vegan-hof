import "./LandingPage.css";
import ImageSlider from "./ImageSlider";

function LandingPage() {
  const slides = [
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/f95a2829-a199-4fae-b308-ba6d167c131c",
      title: "slide1",
    },
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/ba22f2e2-e9b5-4222-a86a-cdd5c01c28fc",
      title: "slide2",
    },
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/0f54b127-5f89-41f0-a72f-37513c04f8f5",
      title: "slide3",
    },
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/de9bd348-3917-4a90-9200-3fb967ee25eb",
      title: "slide4",
    },
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/d08e31db-ede9-43de-89b4-bf39f2b4f6c2",
      title: "slide5",
    },
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/691aad7b-b353-4c1c-ae3e-4b92eb76c394",
      title: "slide6",
    },
    {
      url: "https://github.com/Somu050600/the-vegan-hof/assets/119160374/7dc3097c-06eb-431a-a8be-1ad72a84908f",
      title: "slide7",
    },
  ];

  return (
    <div className="landing-page-container" id="Home">
      <div className="slider-container">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default LandingPage;
