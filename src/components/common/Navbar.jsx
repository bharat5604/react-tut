import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-primary p-5">
      <div className="flex justify-between">
        <div>LOGO</div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">test</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
