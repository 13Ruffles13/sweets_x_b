import "./SweetOptions.css";
import { Link } from "react-router";
import { isFeatureEnabled } from "../../Config/featureFlags";
import SweetBeignets from "../../Visuals/sweets-to-order/Sweet_Beignets.jpg";
import SweetBlueBerryMuffins from "../../Visuals/sweets-to-order/Sweet_BlueBerryMuffins.jpg";
import AlmondCreamCheesePoundCake from "../../Visuals/sweets-to-order/sweetsSugarPowderYellowCake.png";

const sweetOptions = [
  {
    id: "beignets",
    title: "Beignets",
    description:
      "Light, pillowy delights dusted with sugar—pure bliss in every bite!",
    image: SweetBeignets,
    alt: "Sweet Beignets",
    comingSoon: true,
  },
  {
    id: "blueberry-muffins",
    title: "Blueberry Muffins",
    description:
      "Moist, golden muffins bursting with juicy blueberries—baked to perfection.",
    image: SweetBlueBerryMuffins,
    alt: "Sweet Blueberry Muffins",
    comingSoon: true,
  },
  {
    id: "almond-cream-cheese-pound-cake",
    title: "Almond Cream Cheese Pound Cake",
    description:
      "Soft, buttery cake topped with a gentle sprinkle of powdered sugar—heavenly and irresistible.",
    image: AlmondCreamCheesePoundCake,
    alt: "Almond Cream Cheese Pound Cake",
    comingSoon: false,
  },
];

export function SweetOptions() {
  const ordersEnabled = isFeatureEnabled("enableOrdersPage");

  return (
    <section className="sweetOptionsMainContainer">
      <h2 className="sweetOptionsTitle">What you'll love</h2>

      <div className="sweetOptionsGrid">
        {sweetOptions.map((sweet) => {
          const sweetCard = (
            <>
              <div className="sweetImageDetails">
                {sweet.comingSoon && (
                  <span className="comingSoonBadge">Coming Soon</span>
                )}

                <h3>{sweet.title}</h3>

                <p>{sweet.description}</p>
              </div>

              <img src={sweet.image} alt={sweet.alt} />
            </>
          );

          if (sweet.comingSoon) {
            return (
              <article
                className="sweetImageContainer comingSoon"
                key={sweet.id}
              >
                {sweetCard}
              </article>
            );
          }

          return (
            <article className="sweetImageContainer" key={sweet.id}>
              {ordersEnabled ? (
                <Link to="/orders" className="sweetImageLink">
                  {sweetCard}
                </Link>
              ) : (
                <a
                  href="https://forms.gle/H6PMGL8RNCrVG9y79"
                  className="sweetImageLink"
                >
                  {sweetCard}
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
