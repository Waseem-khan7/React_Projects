import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Waseem-khan7")
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //       .catch((err) => console.error(err));
  //   }, []);

  return (
    <div className="bg-gray-700 text-white text-center p-4">
      Github followers: {data.followers} <br />
      <img
        src={data.avatar_url}
        alt="Avatar"
        className="rounded-full w-50 h-50 mx-auto mb-4"
      />
      <p className="text-xl">{data.name}</p>
      <h1 className="text-3xl mb-4">GitHub Profile</h1>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Waseem-khan7");
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub data");
  }
  return res.json();
};
