import { useEffect, useState } from "react";

const useToken = (user) => {
  console.log(user);
  const [token, setToken] = useState(""); // for token state

  useEffect(() => {
    const email = user?.user?.email; // get user email from user
    console.log(email);
    const currentUser = { email: email };

    if (email) {
      fetch(`   https://mountain-bike-server.vercel.app/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;

          localStorage.setItem("accessToken", accessToken);

          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
