import { useState, useEffect, useMemo } from "react";
import getData from "@/fetchHook/datafetch";

export const useFilteredData = (initialFilters) => {
  const [data, setData] = useState({ Properties: [] });
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
        const response = await getData();
        setData(response.Properties);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item) => {
        const location = item.Location || "Andheri";
        const price = item.AskingPrice || 0;
        const isRent = item.IsForRent || false;
        const beds = item.Features?.Bedrooms || 0;

        const priceInRange =
          filters.maxPrice === Infinity || price <= filters.maxPrice;

        return (
          location === filters.location &&
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
