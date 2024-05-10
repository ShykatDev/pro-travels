import { useEffect, useState } from "react";

const useDebounce = (searchText) => {
  const [debouncedText, setDebouncedText] = useState(searchText);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsLoading(false);
      setDebouncedText(searchText);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
      setIsLoading(true);
    };
  }, [searchText]);

  return { debouncedText, isLoading };
};

export default useDebounce;
