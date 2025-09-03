import "./ContactFooter.css";
import SweetXB_InstagramIcon from "../../assets/contact-icons//icons8-instagram-50-white.png";

function ContactFooter() {
  return (
    <footer className="mainContactFooter">
      <div className="contactFooterContent">
        <div className="footerContent">
          <h2>Find us here</h2>
          <address>
            <p>SweetsXB@gmail.com</p>
            <p>(699) 263-1514</p>
          </address>
        </div>
        <div className="footerContent">
          <a
            href="https://www.instagram.com/sweetsssxb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="InstagramIcon"
              src={SweetXB_InstagramIcon}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;
