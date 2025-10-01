import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./footer";
import Exotros from "./exotros";
import Luxertia from "./luxertia";
import Gemidera from "./gemidera";

const Explore = () => (
  <div style={{ minHeight: "100vh", width: "100%", background: "#181c24" }}>
    <div style={{ height: "50px" }}></div> {/* spazio tra top e navbar */}
    <CustomNavbar />
    <Luxertia />
    <Exotros />
    <Gemidera />
    <Footer />
  </div>
);

export default Explore;
