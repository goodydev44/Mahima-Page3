import React from "react";
import logo from "../assets/Images/Logo.png";

const Header: React.FC = () => {
  return (
    <div className="bg-[#b39e78] flex justify-center gap-16">
      <nav className="navSty1">
        <h4 className="eleSty1">HOME</h4>
        <h4 className="eleSty1">ABOUT US</h4>
        <h4 className="eleSty1">FURNITURE</h4>
      </nav>
      <img src={logo} className="w-[140px] h-[180px] -mb-24" alt="Logo" />
      <nav className="navSty1">
        <h4 className="eleSty1">STORES</h4>
        <h4 className="eleSty1">CONTACT US</h4>
        <h4 className="eleSty1">OFFICE</h4>
      </nav>
    </div>
  );
};

export default Header;
