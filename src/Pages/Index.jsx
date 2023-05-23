import LandingPage from "./LandingPage/LandingPage";
import Products from "./Products/Products";
import About from "./About/About";
import Contact from "./Contact/Contact";


function Pages() {
    return (
      <div>
        <LandingPage/>
        <Products/>
        <About/>
        <Contact/>
      </div>
    );
  }
  
  export default Pages;