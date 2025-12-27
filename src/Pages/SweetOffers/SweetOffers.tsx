import "./SweetOffers.css";
import { HeartIcon } from "../../Components/HeartIcon";

export function SweetOffers() {
  return (
    <div className="sweetOffersMainContainer">
      <h2 id="sweetOffersTitle">SWEET OFFERS</h2>
      <div className="offersGrid">
        <div className="offersCard">
          <a
            href="https://www.instagram.com/sweetsssxb/"
            id="instagramLink"
            className="offersContainerBorder"
          >
            <h3>SweetsXB Instagram</h3>
            <HeartIcon />
            <p>
              Get a daily dose of sweetness! Follow us on Instagram to see our
              freshest hand-crafted sweets, seasonal specials, and
              behind-the-scenes moments straight from the oven.
              <br />
              <br />
              Tag us in your sweet moments and be featured on our feed!
            </p>
          </a>
        </div>

        <div className="offersCard" id="tiktok">
          <div className="offersContainerBorder">
            <h3>SweetsXB TikTok</h3>
            <HeartIcon />
            <p>
              Watch our sweets come to life! Follow us on TikTok for fun,
              bite-sized videos of our hand-crafted sweets, behind-the-scenes
              baking, and seasonal creations
              <br />
              <br />
              Share your own sweet moments with #SweetsXB for a chance to be
              featured!
            </p>
          </div>
        </div>

        <div className="offersCard" id="newsletter">
          <div className="offersContainerBorder">
            <h3>SweetsXB Newsletter</h3>
            <HeartIcon />
            <p>
              Stay updated with the latest sweets, special offers, and seasonal
              releases from SweetsXB. Subscribe to our newsletter and never miss
              a fresh-baked delight!
              <br />
              <br />
              #SweetsXB.News
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
