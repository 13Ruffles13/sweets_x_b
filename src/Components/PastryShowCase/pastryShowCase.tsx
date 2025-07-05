import "./pastryShowCase.css";

function PastryShowCase() {
  return (
    <div className="mainPastryShowCaseContainer">
      <table>
        <th className="showCaseCol1">
          <div>
            <div className="whiteSugarHeart">
              {" "}
              <>&#129293;</>
            </div>
            <h1 id="pastryTitle">Pastry <br/> Perfection</h1>
            <p>
              Discover deliciousness at Chervet Bakery. Imagine biting into a
              freshly baked treat that's made with love and handled with care.
              <br/>

              No need to imagine, because our pastries are baked, packed, and
              delivered on the day they're made, so you're assured of oven-fresh
              goodness. 
              <br/>

              Now that's perfection.
            </p>
          </div>
        </th>
        <th className="showCaseCol2">
          <div>SomeImage</div>
        </th>
      </table>
    </div>
  );
}

export default PastryShowCase;
