import "./App.css";
import { AsideContent } from "./Components/CardListing/AsideContent";
import { MainContent } from "./Components/MainContentScreen/MainContent";
/**
 * @returns (AsideContent,MainContent) body which Contain Card list and input form field
 */
function App() {
  return (
    <div className="main-div">
      <MainContent />
      <AsideContent />
    </div>
  );
}
export default App;
