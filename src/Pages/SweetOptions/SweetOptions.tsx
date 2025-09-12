import "./SweetOptions.css";
import SweetBeignets from "../../Assets/Sweet_Beignets.jpg";
import SweetBlueBerryMuffins from "../../Assets/Sweet_BlueBerryMuffins.jpg";
import SweetYellowCake from "../../Assets/sweetsSugarPowderYellowCake.png";

function SweetOptions() {
  return (
    <div className="sweetOptionsMainContainer">
      <h1>What you'll love</h1>
      <div className="sweetOptionsGrid">
        <div className="sweetImageContainer">
          <div className="sweetImageDetails">
            <h2>Beignets</h2>
            <p>Heavenly pastry creations that will satisfy your cravings</p>
          </div>
          <img src={SweetBeignets} alt="Sweet Beignets" />
        </div>
        <div className="sweetImageContainer">
          <div className="sweetImageDetails">
            <h2>Blueberry Muffins</h2>
            <p>Deliciously moist muffins that are sure to impress</p>
          </div>
          <img src={SweetBlueBerryMuffins} alt="Sweet Blueberry Muffins" />
        </div>
        <div className="sweetImageContainer">
          <div className="sweetImageDetails">
            <h2>Yellow Cake</h2>
            <p>Freshly-baked cake sprinkled with powdered sugar</p>
          </div>
          <img src={SweetYellowCake} alt="Sweet Yellow Cake" />
        </div>
      </div>
    </div>
  );
}

export default SweetOptions;
