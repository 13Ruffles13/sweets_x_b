import "./Footer.css";
import sweetsLogoTransparent from "../../assets/Sweets_x_B_logo_noBackground.png";
import sweetFooter from "../../assets/Sweet_Footer.jpg";

function Footer() {
  return (
    <div className="FooterMainContainer">
      <div className="FooterContent">
        <img
          id="sweetFooter"
          src={sweetFooter}
          alt="sweetFooter chocolate bar and red berry"
        />
        <div className="FooterLogoWrapper">
          <img
            id="sweetsxb_logo"
            src={sweetsLogoTransparent}
            alt="Sweets x B Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
