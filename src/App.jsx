import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Publicidad from "./components/Publicidad";
import Principal from "./pages/Principal";
import Peliculas from "./pages/Peliculas";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Publicidad />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;