import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./styles/Search.css";

export default function Search() {
  const [results, setResults] = useState();
  let [loaded, setLoaded] = useState(false);

  function showResults(response) {
    setResults(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <>
        <div id="content">
          <h2>Filter by keywords</h2>
          <form id="search-form">
            <img src="search.png" className="search-img" alt="search-img" />
            <input placeholder="Search" type="search" autoComplete="off" />
          </form>
          <h2>Results: 6</h2>
          <hr />
          <div className="row results">
            {results.map((card, index) => {
              if (index < 6) {
                return (
                  <div id="card" className="card">
                    <div className="card-img">
                      <img
                        src={card.pictures[0] || null}
                        className="card-img"
                        alt="card-img"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-date">
                        <FormattedDate date={card.createdAt.slice(0, 10)} />
                      </h3>
                      <h1 className="card-title">{card.name}</h1>
                      <p className="card-text">
                        {card.description.slice(0, 100)}
                      </p>
                      <div className="card-link">
                        <Link to="/article" className="link">
                          Read more
                          <span className="path-sign">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  } else {
    let apiUrl =
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
    axios.get(apiUrl).then(showResults);
    return null;
  }
}
