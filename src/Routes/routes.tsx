import Home from "../Components/Home/home";
import Quotes from "../Components/Quotes/quotes";
import PastryShowCase from "../Components/PastryShowCase/pastryShowCase";
import SweetOffers from "../Components/SweetOffers/SweetOffers";
import SweetOptions from "../Components/SweetOptions/SweetOptions";
import Footer from "../Components/Footer/Footer";
import ContactFooter from "../Components/ContactFooter/ContactFooter"

function Routes() {
  return (
    <>
      <Home />
      <Quotes />
      <PastryShowCase />
      <SweetOffers />
      <SweetOptions />
      <Footer />
      <ContactFooter />
    </>
  );
}

export default Routes;
