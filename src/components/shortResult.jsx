import React, { useState, useEffect } from "react";
import axios from "axios";

function ShortResult({ inputValue }) {
  const [shortenLink, setShortenLink] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);

  // Calling Short URL POST
  const fetchUrl = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/short_urls.json",
        headers: {
          accept: "application/json",
        },
        data: {
          full_url: `${inputValue}`,
        },
      });
      setShortenLink(` http://localhost:3000/${response.data.shorted_url}`);
    } catch (error) {
      setErrorResponse(true);
    }
  };

  // Execute fetchUrl request when inputValue changes.
  useEffect(() => {
    if (inputValue.length) {
      fetchUrl();
      setErrorResponse(false);
    }
  }, [inputValue]);

  // Render error alert when invalid inputValue.
  if (errorResponse) {
    return (
      <div className="alert alert-danger" role="alert">
        Full url is not a valid url !!
      </div>
    );
  }

  return (
    <>
      {shortenLink && (
        <div className="alert alert-success" role="alert">
          <a href={shortenLink} target="_blank">
            {shortenLink}
          </a>
        </div>
      )}
    </>
  );
}

export default ShortResult;
