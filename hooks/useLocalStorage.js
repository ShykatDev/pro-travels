"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );
  useEffect(() => {
    if (window !== undefined) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;
