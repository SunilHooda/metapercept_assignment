import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <p>Title</p>
      </div>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <button>Button</button>
      </div>
    </div>
  );
};

export default Navbar;
