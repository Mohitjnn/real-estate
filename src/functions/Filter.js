import getData from "@/fetchHook/datafetch";
import { useState, useEffect, useMemo } from "react";

export const useFilteredData = (initialFilters) => {
  const [data, setData] = useState([]);
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
        console.log("Fetching data with filters:", filters); // Debugging statement
        const result = await getData(filters);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [filters]);

  const filteredData = useMemo(() => {
    return data;
  }, [data]);

  return {
    data,
    filters,
    setFilters,
    handleFilterChange,
    filteredData,
  };
};
