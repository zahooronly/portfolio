import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col h-[60vh] justify-center items-center">
      <div className="flex flex-col gap-3 mb-3">
        <Image
          className="border rounded-full shadow-md"
          src="/images/gamistan.png"
          alt="Zahoor Ahmad"
          width={100}
          height={100}
        />
        <h1 className="font-light text-xl text-center">
          Mr<span className="font-bold">.</span> Zahoor Ahmad
          <span className="font-bold text-xl">.</span>
        </h1>
      </div>
      <h1 className="text-4xl font-semibold">Full-Stack Web Developer</h1>
      <p className="text-sm ">
        Imma passionate Developer. I enjoy making Websites that help people.
      </p>
    </div>
  );
};

export default Hero;
