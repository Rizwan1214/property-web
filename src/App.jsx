import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from "./components/heroBanner";
import PropertySpecs from "./components/propertySpacs";
import PropertyTabs from "./components/propertyTabs";

function App() {
  return (
    <div className="landing-page">
      <HeroBanner />
      <PropertySpecs />
      <PropertyTabs />
    </div>
  );
}

export default App;
