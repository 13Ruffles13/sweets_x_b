import yellowCake from "../../Visuals/sweets-to-order/sweetsSugarPowderYellowCake.png";
import "./pastryShowCase.css";
import { HeartIcon } from "../../Components/HeartIcon";

export function PastryShowCase() {
  return (
    <div className="mainPastryShowCaseContainer">
      <div className="showCaseCol1">
        <HeartIcon />
        <h2 id="pastryTitle">
          PASTRY <br /> PERFECTION
        </h2>
        <p className="pastryFeedText">
          Experience the magic of freshly baked sweets at SweetsXB. Imagine
          biting into a sweet crafted with love and handled with care.
          <br />
          <br />
          No need to imagine-our sweets are baked, packed, and delivered the
          same day, so you can enjoy oven-fresh goodness with every bite.
          <br />
          <br />
          Pure perfection, every time.
        </p>
      </div>

      <div className="showCaseCol2">
        <img src={yellowCake} alt="Powder Sugar Yellow Cake" />
      </div>
    </div>
  );
}
