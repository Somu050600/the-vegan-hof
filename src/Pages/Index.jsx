import Contact from "./Contact/Contact";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About/About";
import "./index.css";

function Pages() {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <LandingPage />
      <About />
      <Contact />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Pages;
