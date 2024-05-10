import { useEffect, useState } from "react";

let local;
const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(local ?? defaultValue);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      console.log("server");
    }
  }, [key, data]);

  useEffect(() => {
    if (typeof window !== undefined) {
      local = JSON.parse(localStorage.getItem(key));
    }
  }, []);

  return [data, setData];
};

export default useLocalStorage;
