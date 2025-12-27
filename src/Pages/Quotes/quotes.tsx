import "./quotes.css";
import { HeartIcon } from "../../Components/HeartIcon";

export function Quotes() {
  return (
    <div className="quotesMainContainer">
      <HeartIcon />
      <h1 id="whiteSweetQuote">
        Freshly baked and ready for you-picked up directly from our oven to your
        hands.
      </h1>
      <HeartIcon />
    </div>
  );
}
