import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  console.log("git data", data);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/raj2784`).then((res) =>
  //     res.json().then((data) => {
  //       setData(data);
  //       console.log(data);
  //     })
  //   );
  // }, []);

  // or below githubInfoLoader for more optimise data, while user hover the link data fetch start from api

  return (
    <div className="text-center m-4 bg-gray-700 text-white text-3xl p-4">
      <div>Github : Name {data.name}</div>
      <div>Github : Bio {data.bio}</div>
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/raj2784`);
  return res.json();
};
