import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import InputShortener from './components/inputShortener';
import ShortResult from './components/shortResult'

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <ShortResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
