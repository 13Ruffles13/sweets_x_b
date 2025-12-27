import "./SweetOptions.css";
import SweetBeignets from "../../Visuals/sweets-to-order/Sweet_Beignets.jpg";
import SweetBlueBerryMuffins from "../../Visuals/sweets-to-order/Sweet_BlueBerryMuffins.jpg";
import AlmondCreamCheesePoundCake from "../../Visuals/sweets-to-order/sweetsSugarPowderYellowCake.png";
import { useNavigate } from "react-router";
import { isFeatureEnabled } from "../../Config/featureFlags";

export function SweetOptions() {
  const navigate = useNavigate();

  return (
    <div className="sweetOptionsMainContainer">
      <h2 id="sweetOptionsTitle">What you'll love</h2>
      <div className="sweetOptionsGrid">
        <div className="sweetImageContainer" id="beignets">
          <div className="sweetImageDetails">
            <h3>Beignets</h3>
            <p>
              Light, pillowy delights dusted with sugar-pure bliss in every
              bite!
            </p>
          </div>
          <img src={SweetBeignets} alt="Sweet Beignets" />
        </div>
        <div className="sweetImageContainer" id="blueberry-muffins">
          <div className="sweetImageDetails">
            <h3>Blueberry Muffins</h3>
            <p>
              Moist, golden muffins bursting with juicy blueberries-baked to
              perfection.
            </p>
          </div>
          <img src={SweetBlueBerryMuffins} alt="Sweet Blueberry Muffins" />
        </div>
        <div className="sweetImageContainer">
          <a
            href="https://forms.gle/H6PMGL8RNCrVG9y79"
            id="almond-cream-cheese-pound-cakeLink"
          >
            <div
              className="sweetImageDetails"
              id="almond-cream-cheese-pound-cake"
            >
              <h3 id="almond-cream-cheese-pound-cakeTitle">
                Almond Cream Cheese Pound Cake
              </h3>
              <p>
                Soft, buttery cake topped with a gentle sprinkle of powdered
                sugar-heavenly and irresistible
              </p>
            </div>
            <img
              src={AlmondCreamCheesePoundCake}
              alt="Almond Cream Cheese Pound Cake"
              onClick={
                isFeatureEnabled("enableOrdersPage")
                  ? () => void navigate("/orders")
                  : undefined
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
}
