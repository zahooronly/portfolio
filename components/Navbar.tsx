import React from "react";
import GetMyCV from "./Button";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 pb-1">
      <Link href="/">
        <Image
          className="shadow-md rounded-full"
          src="/images/zahoor.png"
          alt="Zahoor Ahmad"
          width={36}
          height={36}
        />
      </Link>
      <div>
        <Button variant="outlineZ">Get my CV</Button>
      </div>
    </div>
  );
};

export default Navbar;
