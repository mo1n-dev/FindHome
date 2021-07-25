import React from "react";
import { apartments } from "../database/list";
import Image from "next/image";
import { list } from "postcss";

export default function ApparmentList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {apartments.map((home) => (
        <div>
          <Image
            src={home.picture}
            alt="picture of home"
            width={300}
            height={300}
          />
          <div>Monthly Rent :{home.rent}</div>
          <div> Size :{home.size}</div>
          <div>Location :{home.location}</div>
          <button onClick={() => addFav(home)}>add</button>
        </div>
      ))}
    </div>
  );
}
