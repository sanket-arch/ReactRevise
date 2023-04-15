import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    // setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldnot fetch");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError("");
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    // }, 1000);
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
