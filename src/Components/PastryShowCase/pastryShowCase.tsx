import yellowCake from "../../assets/sweetsSugarPowderYellowCake.png";
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
          Discover deliciousness at Chervet Bakery. Imagine biting into a
          freshly baked treat that's made with love and handled with care.
          <br />
          <br />
          No need to imagine, because our pastries are baked, packed, and
          delivered on the day they're made, so you're assured of oven-fresh
          goodness.
          <br />
          <br />
          Now that's perfection.
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
