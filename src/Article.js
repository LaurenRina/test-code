import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/Article.css";

export default function Article() {
  const [result, setResult] = useState();
  let [loaded, setLoaded] = useState(false);

  function showResult(response) {
    setResult(response.data[0]);
    setLoaded(true);
  }

  function showDescriprion1() {
    let articleDescriptions = result.description.split("\n ");
    let p1 = articleDescriptions[1];
    return p1;
  }
  function showDescriprion2() {
    let articleDescriptions = result.description.split("\n ");
    let p2 = articleDescriptions[3];
    return p2;
  }
  function showDescriprion3() {
    let articleDescriptions = result.description.split("\n ");
    let p3 = articleDescriptions[4];
    return p3;
  }
  function showCompensations() {
    let articleDescriptions = result.description.split("\n ");
    let articleCompensations = articleDescriptions[5].split("\n\t ");
    let p4 = articleCompensations[0];
    return p4;
  }
  function showCompensation1() {
    let articleDescriptions = result.description.split("\n ");
    let articleCompensations = articleDescriptions[5].split("\n\t ");
    let articleCompensation = articleCompensations[1].split(". ");
    let li1 = articleCompensation[0];
    return li1;
  }
  function showCompensation2() {
    let articleDescriptions = result.description.split("\n ");
    let articleCompensations = articleDescriptions[5].split("\n\t ");
    let articleCompensation = articleCompensations[1].split(". ");
    let li2 = articleCompensation[1];
    return li2;
  }
  function showCompensation3() {
    let articleDescriptions = result.description.split("\n ");
    let articleCompensations = articleDescriptions[5].split("\n\t ");
    let articleCompensation = articleCompensations[1].split(". ");
    let li3 = articleCompensation[2];
    return li3;
  }

  if (loaded) {
    return (
      <>
        <div id="page">
          <img src={result.pictures[0]} className="card-img" alt="card-img" />
          <div id="article" className="article">
            <div id="card" className="card">
              <h1 className="card-title">{result.name}</h1>
              <div className="card-discription">
                <p className="card-text">{showDescriprion1()}</p>
                <h3 className="card-text">{showDescriprion2()}</h3>
                <p className="card-text">{showDescriprion3()}</p>
                <h3 className="card-text">{showCompensations()}</h3>
                <ul>
                  <li>{showCompensation1()}</li>
                  <li>{showCompensation2()}</li>
                  <li>{showCompensation3()}</li>
                </ul>
              </div>
            </div>
            <div className="article-link">
              <Link to="/">
                <span className="path-sign">&larr;</span>
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    let apiUrl =
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
    axios.get(apiUrl).then(showResult);
    return null;
  }
}
