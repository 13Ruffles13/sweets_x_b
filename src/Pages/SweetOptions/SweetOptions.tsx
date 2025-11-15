import "./SweetOptions.css";
import SweetBeignets from "../../Visuals/sweets-to-order/Sweet_Beignets.jpg";
import SweetBlueBerryMuffins from "../../Visuals/sweets-to-order/Sweet_BlueBerryMuffins.jpg";
import SweetYellowCake from "../../Visuals/sweets-to-order/sweetsSugarPowderYellowCake.png";

function loadCustomersOrderPage(): void {
  const url = window.location.href;
  window.location.href = url + "orders";
}

function SweetOptions() {
  return (
    <div className="sweetOptionsMainContainer">
      <h1 id="sweetOptionsTitle">What you'll love</h1>
      <div className="sweetOptionsGrid">
        <div className="sweetImageContainer">
          <div className="sweetImageDetails">
            <h2>Beignets</h2>
            <p>
              Light, pillowy delights dusted with sugar-pure bliss in every
              bite!
            </p>
          </div>
          <img src={SweetBeignets} alt="Sweet Beignets" />
        </div>
        <div className="sweetImageContainer">
          <div className="sweetImageDetails">
            <h2>Blueberry Muffins</h2>
            <p>
              Moist, golden muffins bursting with juicy blueberries-baked to
              perfection.
            </p>
          </div>
          <img src={SweetBlueBerryMuffins} alt="Sweet Blueberry Muffins" />
        </div>
        <div className="sweetImageContainer">
          <div className="sweetImageDetails">
            <h2>Yellow Cake</h2>
            <p>
              Soft, buttery cake topped with a gentle sprinkle of powdered
              sugar-heavenly and irresistible
            </p>
          </div>
          <img
            src={SweetYellowCake}
            alt="Sweet Yellow Cake"
            onClick={loadCustomersOrderPage}
          />
        </div>
      </div>
    </div>
  );
}

export default SweetOptions;
