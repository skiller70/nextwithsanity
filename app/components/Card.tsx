"use client";
import Image from "next/image";
import React from "react";

export default function Card(props: any) {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <Image src={`/${props.img}`} alt="card1" width={650} height={650} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.titleany}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
