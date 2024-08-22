import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <>
      <HeroSection name={"Ecom store"} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
