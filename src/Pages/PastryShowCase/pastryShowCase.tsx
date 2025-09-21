import yellowCake from "../../Visuals/sweets-to-order/sweetsSugarPowderYellowCake.png";
import "./pastryShowCase.css";

function PastryShowCase() {
  return (
    <div className="mainPastryShowCaseContainer">
      {/* Left side: Text */}
      <div className="showCaseCol1">
        <div className="whiteSugarHeart">&#129293;</div>
        <h1 id="pastryTitle">
          PASTRY <br /> PERFECTION
        </h1>
        <p className="pastryFeedText">
          Experience the magic of freshly baked sweets at SweetsXB. Imagine
          bitting into a sweet crafted with love and handled with care.
          <br />
          <br />
          No need to imagine-our sweets are baked, packed, and delivered the
          same day, so you can enjoy oven-fresh goodness with every bite.
          <br />
          <br />
          Pure perfection, every time.
        </p>
      </div>

      {/* Right side: Image */}
      <div className="showCaseCol2">
        <img src={yellowCake} alt="Powder Sugar Yellow Cake" />
      </div>
    </div>
  );
}

export default PastryShowCase;
