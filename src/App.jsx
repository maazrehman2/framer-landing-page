import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import SetappSection from "./components/SetApp/SetApp";

import Layout from "./components/Layout/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <SetappSection />
      </Layout>
    </>
  );
};

export default Home;
