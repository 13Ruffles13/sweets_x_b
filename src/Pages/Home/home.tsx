import sweetsLogoTransparent from "../../Visuals/sweet-logos/Sweets_x_B_logo.jpg";
import "./home.css";

export function Home() {
  return (
    <div className="homeContainer">
      <div className="sweetsLogoContainer">
        <img
          className="sweetsLogo"
          src={sweetsLogoTransparent}
          alt="Sweets x B Logo"
        />
        <div className="homeTextContainer">
          <h2>Sweet Treats Crafted from Scratch</h2>
          <p>Taste the difference of fresh, homemade goodness.</p>
        </div>
      </div>
    </div>
  );
}
