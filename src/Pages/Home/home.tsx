import sweetsLogoTransparent from "../../Visuals/sweet-logos/Sweets_x_B_logo.jpg";
import "./home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="sweetsLogoContainer">
          <img
            id="sweetsxb_logo"
            src={sweetsLogoTransparent}
            alt="Sweets x B Logo"
          />
          <h2>Sweet Treats Crafted from Scratch</h2>
          <h5>Taste the difference of fresh, homemade goodness.</h5>
        </div>
      </div>
    </>
  );
}

export default Home;
