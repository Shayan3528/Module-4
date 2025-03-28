import { useEffect, useState } from "react";
import fetchResults from "../Utlis/fetchResults";

export default function useData(query, page) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });

    return () => {
      ignore = true;
    };
  }, [query, page]);

  return results;
}
