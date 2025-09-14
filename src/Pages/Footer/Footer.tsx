import "./Footer.css";
import sweetsLogoTransparent from "../../Visuals/sweet-logos/Sweets_x_B_logo.jpg";

function Footer() {
  return (
    <div className="FooterMainContainer">
      <div className="FooterContent">
        <div className="FooterLogoWrapper">
          <img
            id="sweetsxb_logo_footer"
            src={sweetsLogoTransparent}
            alt="Sweets x B Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
