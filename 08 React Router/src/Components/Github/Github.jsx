// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  const data = useLoaderData();

  // useEffect(() => {
  //   fetch("https://api.github.com/users/whonix2904")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              {data.name}
            </h1>
            <div className="leading-relaxed">{data.bio}</div>
          </div>
          <div className="p-4 flex flex-col w-full items-center justify-center">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {data.public_repos}
            </h2>
            <p className="leading-relaxed">Public Repo</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={data.avatar_url}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const url = "https://api.github.com/users/whonix2904";
  const response = await fetch(url);
  return response.json();
};
