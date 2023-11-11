import React from "react";
import GetMyCV from "./Button";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 pb-1">
      <Image
        className="shadow-sm rounded-full"
        src="/images/zahoor.png"
        alt="Zahoor Ahmad"
        width={36}
        height={36}
      />
      <Button variant="outlineZ">Get my CV</Button>
    </div>
  );
};

export default Navbar;
