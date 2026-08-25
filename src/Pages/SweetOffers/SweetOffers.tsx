import "./SweetOffers.css";
import { HeartIcon } from "../../Components/HeartIcon";

export function SweetOffers() {
  return (
    <section className="sweetOffersMainContainer">
      <h2 className="sweetOffersTitle">SWEET OFFERS</h2>

      <div className="offersGrid">
        <article className="offersCard">
          <a
            href="https://www.instagram.com/sweetsssxb/"
            className="offersContainerBorder"
          >
            <h3>SweetsXB Instagram</h3>

            <HeartIcon />

            <p>
              Get a daily dose of sweetness! Follow us on Instagram to see our
              freshest hand-crafted sweets, seasonal specials, and
              behind-the-scenes moments straight from the oven to your feed.
              <br />
              <br />
              Tag us in your sweet moments and be featured on our feed!
            </p>
          </a>
        </article>

        <article className="offersCard offerComingSoon">
          <div className="offersContainerBorder">
            <h3>SweetsXB TikTok</h3>

            <HeartIcon />

            <p>
              Watch our sweets come to life! Follow us on TikTok for fun,
              bite-sized videos of our hand-crafted sweets, behind-the-scenes
              baking, and seasonal creations.
              <br />
              <br />
              Share your own sweet moments with #SweetsXB for a chance to be
              featured!
            </p>
          </div>
        </article>

        <article className="offersCard offerComingSoon">
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
        </article>
      </div>
    </section>
  );
}
