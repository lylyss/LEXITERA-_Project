import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import Pg from "./components/pg";
import Explore from "./components/explore";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/pg" element={<Pg />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}
export default App;
