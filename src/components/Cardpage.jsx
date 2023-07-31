import React from "react";
import { useState, useEffect } from "react";

function Cardpage() {
  const [flags, setFlags] = useState("");

  const getByIdPage = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    if (Array.isArray(data)) {
      setFlags(data);
      // console.log(data);
    } else {
      setFlags([]);
    }
  };

  useEffect(() => {
    getByIdPage(localStorage.getItem("country"));
  }, []);

  return (
    <>
      <section className="w-full min-h-screen h-fit flex justify-center">
        <div className="max-w-screen-xl w-full h-screen py-16 lg:flex justify-around">
          {flags &&
            flags.map((e) => {
              
              return (
                <>
                  <div className="flex flex-col justify-center">
                    <a href="/">
                    <button className="flex btn btn-ghost md:w-32 my-2">
                      Back
                    </button>
                    </a>
                    <div className="max-w-xl m-5">
                      <img src={e.flags.svg} alt="" />
                    </div>
                  </div>
                  <div className="max-w-lg w-full flex flex-col justify-center items-center">
                    <div className="w-full">
                      <h1 className="m-5 font-bold">{e.name.common}</h1>
                      <div className="lg:flex justify-between w-full mx-5">
                        <ul>
                          <li>
                            <span className="font-bold">Native Name: </span>{" "}
                            {e.name.official}
                          </li>
                          <li>
                            <span className="font-bold">Population: </span>{" "}
                            {Number(e.population).toLocaleString("en-US")}
                          </li>
                          <li>
                            <span className="font-bold">Region: </span>{" "}
                            {e.region}
                          </li>
                          <li>
                            <span className="font-bold">Subregion: </span>{" "}
                            {e.subregion}
                          </li>
                          <li>
                            <span className="font-bold">Capital: </span>{" "}
                            {e.capital}
                          </li>
                        </ul>
                        <ul className="mt-5">
                          <li>
                            <span className="font-bold">
                              Top level Domain:{" "}
                            </span>{" "}
                            {e.tld[0]}
                          </li>
                          <li>
                            <span className="font-bold">Currencies: </span>{" "}
                            {Object.entries(e.currencies).map((e) => e[1].name)}
                          </li>
                          <li>
                            <span className="font-bold">Region: </span>{" "}
                            {e.region}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Cardpage;
