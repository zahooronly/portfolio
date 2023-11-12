import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="backdrop-blur-sm flex flex-col h-[80vh] justify-center items-center">
      <div className="flex flex-col gap-3 mb-3">
        <Image
          className="border rounded-full shadow-sm grayscale"
          src="/images/Zahoor_Ahmad.jpg"
          alt="Zahoor Ahmad"
          width={200}
          height={200}
        />
        {/* <h1 className="font-bold text-xl text-center text-slate-500"> */}
        <h1 className="font-bold text-xl text-center">
          Mr<span className="font-bold">.</span> Zahoor Ahmad
          <span className="font-extrabold text-2xl">.</span>
        </h1>
      </div>
      {/* <h1 className="sm:text-4xl text-2xl font-semibold text-slate-500"> */}
      <h1 className="sm:text-4xl text-2xl font-semibold">
        Full-Stack Web Developer
      </h1>
      {/* <p className="text-sm text-center sm:w-[100%] w-[80%]  text-slate-500"> */}
      <p className="text-sm text-center sm:w-[100%] w-[80%]">
        Imma passionate Developer. I enjoy making Websites that help people.
      </p>
      <Button className="mt-3 sm:mt-5" variant="outline">
        Hire Me ───
      </Button>
    </div>
  );
};

export default Hero;
