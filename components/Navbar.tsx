import React from "react";
import GetMyCV from "./Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 pb-2">
      <Image
        className="shadow-md rounded-full"
        src="/images/zahoor.png"
        alt="Zahoor Ahmad"
        width={50}
        height={50}
      />
      <GetMyCV>Get My CV</GetMyCV>
    </div>
  );
};

export default Navbar;
