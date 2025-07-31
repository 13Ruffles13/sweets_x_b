import "./SweetOptions.css";
import SweetBeignets from "../../assets/Sweet_Beignets.jpg";
import SweetBlueBerryMuffins from "../../assets/Sweet_BlueBerryMuffins.jpg";
import SweetYellowCake from "../../assets/sweetsSugarPowderYellowCake.png";

function SweetOptions() {
  return (
    <div className="sweetOptionsMainContainer">
      <h1>What you'll love</h1>
      <table className="sweetOptionsTable">
        <th className="sweetImage">
          <tr>
            <div className="sweetImageContainer">
              <div className="sweetImageDetails">
                <h2>Beignets</h2>
                <p>Heavenly pastry creations that will satisfy your cravings</p>
              </div>
              <img src={SweetBeignets} alt="Sweet Beignets" />
            </div>
          </tr>
        </th>
        <th className="sweetImage">
          <tr>
            <div className="sweetImageContainer">
              <div className="sweetImageDetails">
                <h2>Blueberry Muffins</h2>
                <p>Deliciously decadent cookies that are sure to impress</p>
              </div>
              <img src={SweetBlueBerryMuffins} alt="Sweet Blueberry Muffins" />
            </div>
          </tr>
        </th>
        <th className="sweetImage">
          <tr>
            <div className="sweetImageContainer">
              <div className="sweetImageDetails">
                <h2>Yellow Cake</h2>
                <p>Freshly-baked loaves of bread you'll find irresistible</p>
              </div>
              <img src={SweetYellowCake} alt="Sweet Yellow Cake" />
            </div>
          </tr>
        </th>
      </table>
    </div>
  );
}

export default SweetOptions;
