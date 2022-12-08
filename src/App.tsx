import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import MainArticle from "./components/MainArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainArticle/:id" element={<MainArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
