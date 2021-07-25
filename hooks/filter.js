import { useState, useEffect } from "react";
import { apartments } from "../database/list";

export const useFilter = () => {
  // const [apartmentsData, setApartmentsData] =
  //   useState(apartments);
  const [rentFilter, setRentFilter] = useState();
  // const [sizeFilter, setSizeFilter] = useState();

  useEffect(() => {
    if (rentFilter) {
      const filters = rentFilter.split(",");
      let filteredApartments;
      if (filters[0].includes("+")) {
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

  return;
  handleFilterChangeByRent;
};

// useEffect(() => {
//   if (sizeFilter) {
//     const filters = sizeFilter.split(",");
//     let filteredApartments;
//     if (filters[0].includes("+")) {
//       filteredApartments = apartments.filter(
//         (item) =>
//           item.size >= parseInt(filters[0].replace("+", ""))
//       );
//     } else if (filters[0].includes("-")) {
//       filteredApartments = apartments.filter(
//         (item) =>
//           item.size <= parseInt(filters[0].replace("-", ""))
//       );
//     } else {
//       filteredApartments = apartments.filter(
//         (item) =>
//           item.size >= filters[0] && item.size <= filters[1]
//       );
//     }
//     setApartmentsData(filteredApartments);
//   }
// }, [sizeFilter]);
// const handleFilterChangeBySize = (e) => {
//   setSizeFilter(e.target.value);
// };
