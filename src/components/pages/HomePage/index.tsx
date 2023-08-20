import { Helmet } from "react-helmet";
import AboutUs from "../../AboutUs";
import LoveCoffee from "../../LoveCoffee";
import OurBest from "../../OurBest";
import Footer from "../../Footer";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta name="Home" content="Coffee Home" />
        <title>☕Coffee Home</title>
      </Helmet>
      <LoveCoffee />
      <AboutUs />
      <OurBest />
      <Footer />
    </>
  );
};

export default HomePage;
