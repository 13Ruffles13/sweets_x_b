import "./Footer.css";
import sweetsLogoTransparent from "../../Visuals/sweet-logos/Sweets_x_B_logo.jpg";

export function Footer() {
  return (
    <section
      className="FooterMainContainer"
      aria-label="Website footer with SweetsXB brand logo"
    >
      <div className="FooterContent">
        <div className="FooterLogoWrapper">
          <img
            className="sweetsxbLogoFooter"
            src={sweetsLogoTransparent}
            alt="Sweets x B Logo - Hand-crafted sweets bakery"
          />
        </div>
      </div>
    </section>
  );
}
