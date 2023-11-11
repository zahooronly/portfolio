import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col h-[60vh] justify-center items-center">
      <div className="flex flex-col gap-3 mb-3">
        <Image
          className="border rounded-full shadow-md grayscale"
          src="/images/Zahoor_Ahmad.jpeg"
          alt="Zahoor Ahmad"
          width={200}
          height={200}
        />
        <h1 className="font-light text-xl text-center text-slate-800">
          Mr<span className="font-bold">.</span> Zahoor Ahmad
          <span className="font-bold text-xl">.</span>
        </h1>
      </div>
      <h1 className="sm:text-4xl text-2xl font-semibold text-slate-500">
        Full-Stack Web Developer
      </h1>
      <p className="text-sm text-center sm:w-[100%] w-[80%]  text-slate-500">
        Imma passionate Developer. I enjoy making Websites that help people.
      </p>
    </div>
  );
};

export default Hero;