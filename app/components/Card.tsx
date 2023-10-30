"use client";
import Image from "next/image";
import React from "react";

export default function Card(props: any) {
  return (
    <div className=" container mx-auto px-4">
      <div className="card   shadow-[0_0px_10px_red]	">
        <figure >
          <Image className=" md:aspect-[2/1.4] " src={`${props.img}`} alt="card1" width={650} height={650} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.titleany}</h2>
          <p>{props.content}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
