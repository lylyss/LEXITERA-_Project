import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import Pg from "./components/pg";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/pg" element={<Pg />} />
      </Routes>
    </Router>
  );
}
export default App;
