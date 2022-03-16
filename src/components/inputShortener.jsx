import React, { useState } from "react";

function InputShortener({ setInputValue }) {
    const [value, setValue] = useState("");

    // On shorten button click, update the inputValue.
    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }
    
    return (
      <div className="inputContainer">
        <h1>
         URL's <span>Shortener</span>
        </h1>
        <div className="input-group mb-3">
          <input
            className="input-group-text"
            type="text"
            placeholder="Paste a link to shorten it"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleClick}>shorten</button>
        </div>
      </div>
    );
  
}

export default InputShortener;
