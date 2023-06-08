import "./App.css";
import DetailsContainer from "./components/DetailsContainer";

import ListComponent from "./components/ListComponent";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <ListComponent />
      <DetailsContainer />
    </div>
  );
}

export default App;
