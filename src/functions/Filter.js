// functions/Filter.js
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const useFilteredData = (initialFilters) => {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredData = React.useMemo(() => {
    if (data && Object.keys(data).length > 0) {
      const locationData = data[filters.location] || [];
      return locationData.filter((item) => {
        const price = item.AskingPrice || 0;
        const isRent = item.IsForRent || false;
        const beds = item.Features?.Bedrooms || 0;

        // Apply filters based on current filter values
        const priceInRange =
          filters.maxPrice === Infinity || price <= filters.maxPrice;

        return (
          beds === filters.bedrooms &&
          price >= filters.minPrice &&
          priceInRange &&
          isRent === filters.isForRent
        );
      });
    }
    return [];
  }, [data, filters]);

  return {
    data,
    filters,
    setFilters,
    handleFilterChange,
    filteredData,
  };
};
