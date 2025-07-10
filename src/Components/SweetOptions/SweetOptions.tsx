import "./SweetOptions.css";
import SweetBeignets from "../../assets/Sweet_Beignets.jpg"

function SweetOptions() {
  return (
    <div className="sweetOptionsMainContainer">
      <h1>What you'll love</h1>
      <table className="sweetOptionsTable">
        <th className="sweetImage">
          <tr>
            <img src={SweetBeignets} alt="Sweet Beignets" />
          </tr>
        </th>
        <th className="sweetImage">
          <tr>
            <div className="">Hello</div>
          </tr>
        </th>
        <th className="sweetImage">
          <tr>
            <div className="">Hello</div>
          </tr>
        </th>
      </table>
    </div>
  );
}

export default SweetOptions;
