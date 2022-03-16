import React, { useEffect, useState } from "react";
import axios from "axios";

const ShortedList = ({ inputValue }) => {
  const [urls, setUrls] = useState([]);

  // Calling Short URL GET top 100
  const fetchTopUrl = async () => {
    try {
      const response = await axios({
        method: "get",
        url: process.env.REACT_APP_BASE_API_URL,
        headers: {
          accept: "application/json",
        },
      });
      setUrls(response.data);
    } catch (error) {}
  };

  // Fetch top urls when inputValue changes.
  useEffect(() => {
    fetchTopUrl();
  }, [inputValue]);

  return (
    <div className="shortedContainer">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Top</th>
              <th scope="col">Title</th>
              <th scope="col">Full Url</th>
              <th scope="col">Shorted Url</th>
              <th scope="col">Click Count</th>
            </tr>
          </thead>

          <tbody>
            {urls.map((url, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{url.title}</td>
                <td>{url.full_url}</td>
                <td>
                  <a
                    href={process.env.REACT_APP_BASE_API_URL + url.shorted_url}
                  >
                    {process.env.REACT_APP_BASE_API_URL}
                    {url.shorted_url}
                  </a>
                </td>
                <td>{url.click_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShortedList;
