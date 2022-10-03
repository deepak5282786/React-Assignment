import "./App.css";
import { AsideContent } from "./Components/CardListing/AsideContent";
import { MainContent } from "./Components/MainContent";
/**
 * @returns (AsideContent,MainContent) body which Contain Card list and input form field
 */
function App() {
  return (
    <div className="main-div">
      <AsideContent />
      <MainContent />
    </div>
  );
}

export default App;
