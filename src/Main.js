import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import Article from "./Article";
import "./styles/App.css";

function Main() {
  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <Router>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/article" element={<Article />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default Main;
