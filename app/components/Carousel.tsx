"use client";
import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div className="">
      <div className="relative ">
        <Image
          className="brightness-50 aspect-square[2/1.5]"
          alt="hero"
          src="/hero3.jpg"
          width={1920}
          height={1080}
        />

        <div className="  text-center   absolute top-0  w-full  h-full flex justify-center items-center  ">
          <div className="  text-white prose-slate text-2xl  md:prose-lg lg:prose-2xl ">
            <h1>EASY STEPS </h1>
            <h1>TO HERO&apos;S ITEM </h1>
            <h1> PURCHASE</h1>
       
          </div>
        </div>
      </div>
    </div>
  );
}
