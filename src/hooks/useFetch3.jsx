import { useState, useEffect } from "react";
// const baseUrl = "http://localhost:4000/api";
 const baseUrl = "https://myeshoppersite.onrender.com/api";

 
const useFetch3 = (url) => {
  const [data3, setData] = useState(null);
  const [error3, setError] = useState(false);
  const [loading3, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(baseUrl + url)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data3, error3, loading3 };
};

export default useFetch3;
