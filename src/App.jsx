import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from "./components/heroBanner";
import PropertySpecs from "./components/propertySpacs";

function App() {
  return (
    <div className="landing-page">
      <HeroBanner />
      <PropertySpecs />
    </div>
  );
}

export default App;
