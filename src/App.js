import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputShortener from "./components/inputShortener";
import ShortResult from "./components/shortResult";
import ShortedList from "./components/shortedList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [displayList, setDisplayList] = useState(false);

  // Top 100 Urls toggle.
  const showTopUrl = () => {
    setDisplayList(!displayList);
  };

  return (
    <div className="container">
      <InputShortener
        setInputValue={setInputValue}
        setDisplayList={setDisplayList}
      />
      <ShortResult inputValue={inputValue} />
      <button className="btn btn-success" onClick={showTopUrl}>
        Top 100 URL's
      </button>
      {displayList && <ShortedList inputValue={inputValue} />}
    </div>
  );
}

export default App;
