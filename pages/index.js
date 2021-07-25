import React, { useState, useEffect } from "react";
import Image from "next/image";
import { apartments } from "../database/list";
import FavoriteBtn from "../components/favorite";

export default function index() {
  const [apartmentsData, setApartmentsData] =
    useState(apartments);

  // const handleFilterChangeByRent = useFilter();
  const [rentFilter, setRentFilter] = useState();

  useEffect(() => {
    if (rentFilter) {
      const filters = rentFilter.split(",");
      //     console.log({ filters });
      let filteredApartments;
      if (filters[0].includes("+")) {
        //       console.log({
        //         plus: parseInt(filters[0].replace("+", "")),
        //       });
        filteredApartments = apartments.filter(
          (item) =>
            item.rent >=
            parseInt(filters[0].replace("+", ""))
        );
      } else if (filters[0].includes("-")) {
        filteredApartments = apartments.filter(
          (item) =>
            item.rent <=
            parseInt(filters[0].replace("-", ""))
        );
      } else {
        filteredApartments = apartments.filter(
          (item) =>
            item.rent >= filters[0] &&
            item.rent <= filters[1]
        );
      }
      setApartmentsData(filteredApartments);
    }
  }, [rentFilter]);
  const handleFilterChangeByRent = (e) => {
    setRentFilter(e.target.value);
  };
  const [sizeFilter, setSizeFilter] = useState();

  useEffect(() => {
    if (sizeFilter) {
      const filters = sizeFilter.split(",");
      let filteredApartments;
      if (filters[0].includes("+")) {
        filteredApartments = apartments.filter(
          (item) =>
            item.size >=
            parseInt(filters[0].replace("+", ""))
        );
      } else if (filters[0].includes("-")) {
        filteredApartments = apartments.filter(
          (item) =>
            item.size <=
            parseInt(filters[0].replace("-", ""))
        );
      } else {
        filteredApartments = apartments.filter(
          (item) =>
            item.size >= filters[0] &&
            item.size <= filters[1]
        );
      }
      setApartmentsData(filteredApartments);
    }
  }, [sizeFilter]);
  const handleFilterChangeBySize = (e) => {
    setSizeFilter(e.target.value);
  };

  return (
    <>
      <header className="text-center text-4xl my-10">
        Apartment Finder
      </header>
      <div className="flex justify-evenly">
        <select
          className="border-2 px-5"
          onChange={handleFilterChangeByRent}
        >
          <option>Filter by Rent</option>
          <option value="-500">below 500</option>
          <option value="501,800">501-800</option>
          <option value="801,1200">801-1200</option>
          <option value="+1200"> above 1200</option>
        </select>
        <select
          className="border-2 px-5"
          onChange={handleFilterChangeBySize}
        >
          <option>Filter by Size</option>
          <option value="-40">below 40sqm</option>
          <option value="41,60">41sqm-60sqm</option>
          <option value="61,80">61sqm-80sqm</option>
          <option value="+80"> above 80sqm</option>
        </select>
        <button
          className="border-2 px-5"
          onClick={() => {
            setApartmentsData(apartments);
          }}
        >
          Reset Filter
        </button>
        <button className="px-5 border-2">
          Show Favorites
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {apartmentsData.map((home) => (
          <div className="flex flex-col text-center border-2 p-4 m-2">
            <Image
              src={home.picture}
              alt="picture of home"
              width={300}
              height={300}
            />
            <p>Monthly Rent :{home.rent}euro</p>
            <p> Size :{home.size}sqm</p>
            <p>Location :{home.location}</p>
            <FavoriteBtn />
          </div>
        ))}
      </div>
     <div className="text-center my-5">
        Recreated by Moinuddin Ahmad Shuvo<br></br>
        Copyright © 2021. All rights reserved by mo1n-dev
     </div>
    </>
  );
}
