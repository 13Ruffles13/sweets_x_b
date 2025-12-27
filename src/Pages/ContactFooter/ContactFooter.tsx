import "./ContactFooter.css";
import SweetXB_InstagramIcon from "../../Visuals/contact-icons/icons8-instagram-50-white.png";

export function ContactFooter() {
  return (
    <footer className="mainContactFooter">
      <div className="contactFooterContent">
        <div className="footerContent">
          <h2>Find us here</h2>
          <address>
            <p>sweetsxb.2024@gmail.com</p>
            <p>(669) 263-1514</p>
          </address>
        </div>
        <div className="footerContent">
          <a
            href="https://www.instagram.com/sweetsssxb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page (opens in new window)"
          >
            <img
              id="InstagramIcon"
              src={SweetXB_InstagramIcon}
              alt="Instagram icon - Follow SweetsXB"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
