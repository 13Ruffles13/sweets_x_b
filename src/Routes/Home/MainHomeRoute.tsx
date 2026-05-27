import { ContactFooter } from "../../Pages/ContactFooter/ContactFooter";
import { Footer } from "../../Pages/Footer/Footer";
import { Home } from "../../Pages/Home/home";
import { PastryShowCase } from "../../Pages/PastryShowCase/pastryShowCase";
import { Quotes } from "../../Pages/Quotes/quotes";
import { SweetOffers } from "../../Pages/SweetOffers/SweetOffers";
import { SweetOptions } from "../../Pages/SweetOptions/SweetOptions";

export function MainHomeRoute() {
  return (
    <>
      <main>
        <Home />
        <Quotes />
        <SweetOptions />
        <SweetOffers />
        <PastryShowCase />
      </main>
      <Footer />
      <ContactFooter />
    </>
  );
}
