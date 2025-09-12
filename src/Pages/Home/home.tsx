import sweetsLogoTransparent from "../../Assets/Sweets_x_B_logo.jpg";
import breadBackground from "../../Assets/bread-1281053_1920.jpg";
import "./home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <img
          id="breadBackground"
          src={breadBackground}
          alt="sweetsxb home page background"
        />
        <div className="sweetsLogoContainer">
          <img
            id="sweetsxb_logo"
            src={sweetsLogoTransparent}
            alt="Sweets x B Logo"
          />
          <h2>Sweet Treats made from Scratch</h2>
          <h5>We got you!</h5>
        </div>
      </div>
    </>
  );
}

export default Home;
