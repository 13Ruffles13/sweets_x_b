import "./quotes.css";
import { HeartIcon } from "../../Components/HeartIcon";

export function Quotes() {
  return (
    <div className="quotesMainContainer">
      <HeartIcon />
      <p className="whiteSweetQuote">
        Freshly baked and ready for you—picked up directly from our oven to your
        hands.
      </p>
      <HeartIcon />
    </div>
  );
}
