import React from "react";
import GetMyCV from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 pb-2">
      <h1>LOGO</h1>
      <GetMyCV>Get My CV</GetMyCV>
    </div>
  );
};

export default Navbar;
