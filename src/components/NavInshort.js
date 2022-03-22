import React from "react";
import "./NavInshort.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img style={{cursor: "pointer"}}
             src={require("./images/newslogo.png")} alt="logo" width="20%"></img>
             </div>
  );
};

export default NavInshort;
