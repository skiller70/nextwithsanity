"use client";
import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div className="container  text-white  prose-slate md:prose-lg lg:prose-2xl  mx-auto">
      <div className="relative ">
        <Image
          className="brightness-50"
          alt="hero"
          src="/hero3.jpg"
          width={1920}
          height={1080}
        />

        <div className="  text-center   absolute top-0  w-full  h-full flex justify-center items-center  ">
          <div className="  ">
            <h1>EASY STEPS </h1>
            <h1>TO HERO'S ITEM </h1>
            <h1> PURCHASE</h1>
       
          </div>
        </div>
      </div>
    </div>
  );
}
