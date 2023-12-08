import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const url = "   https://mountain-bike-server.vercel.app/parts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, []);

  return [parts, setParts];
};

export default useParts;
