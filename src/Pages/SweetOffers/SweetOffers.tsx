import "./SweetOffers.css";

function SweetOffers() {
  return (
    <div className="sweetOffersMainContainer">
      <h1 id="sweetOffersTitle">SWEET OFFERS</h1>
      <table className="offersTable">
        <th className="offersTableHeaders">
          <tr>
            <div className="offersContainerBorder">
              <h1>SweetsXB Instagram</h1>
              <div className="whiteSugarHeart">
                {" "}
                <>&#129293;</>
              </div>
              <p>
                Get a daily does of sweetness! Follow us on Instagram to see our
                freshest hand-crafted sweets, seasonal specials, and
                behind-the-scenes moments straight from the oven.
                <br />
                <br />
                Tag us in your sweet moments and be featured on our feed!
              </p>
            </div>
          </tr>
        </th>
        <th className="offersTableHeaders">
          <tr>
            <div className="offersContainerBorder">
              <h1>SweetsXB TikTok</h1>
              <div className="whiteSugarHeart">
                {" "}
                <>&#129293;</>
              </div>
              <p>
                Watch our sweets come to life! Follow us on Tiktok for fun,
                bite-sized videos of our hand-crafted sweets, behind-the-scenes
                baking, and seasonal creations
                <br /><br />
                Share your own sweet moments with #SweetsXB for chance to be featured!
              </p>
            </div>
          </tr>
        </th>
        <th className="offersTableHeaders">
          <tr>
            <div className="offersContainerBorder">
              <h1>SweetsXB Newsletter</h1>
              <div className="whiteSugarHeart">
                {" "}
                <>&#129293;</>
              </div>
              <p>
                Stay updated with the latest sweets, special offers, and seasonal releases from SweetsXB. Subscribe to our newsletter and never miss a fresh-baked delight! 
                <br /><br />
                #SweetsXB.News
              </p>
            </div>
          </tr>
        </th>
      </table>
    </div>
  );
}

export default SweetOffers;
