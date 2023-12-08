import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = "   https://mountain-bike-server.vercel.app/reviews";
    fetch(url, {
      method: "GET",

      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return [reviews, setReviews];
};

export default useReviews;
