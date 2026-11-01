import "./SweetOptions.css";
import { Link } from "react-router";
import { isFeatureEnabled } from "../../Config/featureFlags";
import BananaBreadLoaf from "../../Visuals/sweets-to-order/banana_bread_loaf.png";
import PumpkinCreamCheeseMuffin from "../../Visuals/sweets-to-order/pumpkin_creamcheese_muffin.png";
import SweetBeignets from "../../Visuals/sweets-to-order/Sweet_Beignets.jpg";
import SweetBlueBerryMuffins from "../../Visuals/sweets-to-order/Sweet_BlueBerryMuffins.jpg";
import AlmondCreamCheesePoundCake from "../../Visuals/sweets-to-order/sweetsSugarPowderYellowCake.png";
import type { sweetOptionContract } from "./Contract";

export const sweetOptions: sweetOptionContract[] = [
  {
    id: "beignets",
    title: "Beignets",
    description:
      "Light, pillowy delights dusted with sugar—pure bliss in every bite!",
    image: SweetBeignets,
    alt: "Sweet Beignets",
    comingSoon: true,
    disabledItem: true,
  },
  {
    id: "blueberry-muffins",
    title: "Blueberry Muffins",
    description:
      "Moist, golden muffins bursting with juicy blueberries—baked to perfection.",
    image: SweetBlueBerryMuffins,
    alt: "Sweet Blueberry Muffins",
    comingSoon: true,
    disabledItem: true,
  },
  {
    id: "almond-cream-cheese-pound-cake",
    title: "Almond Cream Cheese Pound Cake",
    description:
      "Soft, buttery cake topped with a gentle sprinkle of powdered sugar—heavenly and irresistible.",
    image: AlmondCreamCheesePoundCake,
    alt: "Almond Cream Cheese Pound Cake",
    comingSoon: false,
    disabledItem: false,
  },
  {
    id: "pumpkin-cream-cheese-muffin",
    title: "Pumpkin Cream Cheese Muffin",
    description: "Moist pumpkin muffin with a luscious cream cheese center.",
    image: PumpkinCreamCheeseMuffin,
    alt: "Pumpkin Cream Cheese Muffin",
    comingSoon: false,
    disabledItem: false,
  },
  {
    id: "banana-bread-loaf",
    title: "Banana Bread Loaf",
    description: "Moist and aromatic banana bread.",
    image: BananaBreadLoaf,
    alt: "Banana Bread Loaf",
    comingSoon: false,
    disabledItem: false,
  },
];

export function SweetOptions() {
  const ordersEnabled = isFeatureEnabled("enableOrdersPage");

  return (
    <section className="sweetOptionsMainContainer">
      <h2 className="sweetOptionsTitle">What you'll love</h2>

      <div className="sweetOptionsGrid">
        {sweetOptions.map((sweet) => {
          if (sweet.disabledItem) {
            return null;
          }
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
