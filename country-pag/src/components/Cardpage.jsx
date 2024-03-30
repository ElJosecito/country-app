import React from "react";
import { useState, useEffect } from "react";

//icons
//back arrow icon
import { FaArrowLeft } from "react-icons/fa";

function Cardpage() {
  const [flags, setFlags] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${window.location.pathname.split("/")[2]}`
      );
      const data = await response.json();
      setFlags(data);
    };
    getCountry();
  }, []);

  return (
    <>
    {/* theme flagpage section */}
    <section className="w-full min-h-screen h-fit flex justify-center dark:bg-veryDarkBlue nunito">
        <div className="max-w-screen-xl w-full h-screen py-16 lg:flex justify-around">
          {flags &&
            flags.map((e) => {
              return (
                <>
                  <div className="flex flex-col justify-center">
                   
                      <FaArrowLeft className="cursor-pointer w-8 h-8 dark:text-veryLightGray" onClick={() => window.history.back()} />
                    
                    

                    <div className="max-w-xl m-5">
                      <img src={e.flags.svg} alt="" />
                    </div>
                  </div>
                  <div className="max-w-lg w-full flex flex-col justify-center items-center">
                    <div className="w-full">
                      <h1 className="m-5 font-bold text-xl dark:text-veryLightGray">{e.name.common}</h1>
                      <div className="lg:flex justify-between w-full mx-5">
                        <ul>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Native Name:{" "}
                            <span className="font-normal dark:text-darkGray">{e.name.official} </span>
                          </li>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Population: {" "}
                            <span className="font-normal dark:text-darkGray">{Number(e.population).toLocaleString("en-US")}</span>
                          </li>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Region:{" "}
                            <span className="font-normal dark:text-darkGray">{e.region}</span>
                          </li>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Subregion:{" "}
                            <span className="font-normal dark:text-darkGray">{e.subregion}</span>
                          </li>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Capital:{" "}
                            <span className="font-normal dark:text-darkGray">{e.capital}</span>
                          </li>


                         
                        </ul>
                        <ul className="mt-5">
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Top level Domain:{" "}
                            <span className="font-normal dark:text-darkGray">{e.tld[0]}</span>
                          </li>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Currencies:{" "}
                            <span className="font-normal dark:text-darkGray">{Object.entries(e.currencies).map((e) => e[1].name)}</span>
                          </li>
                          <li className="my-1 font-bold dark:text-veryLightGray">
                          Region:{" "}
                            <span className="font-normal dark:text-darkGray">{e.region}</span>
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
      {/* <section className="w-full min-h-screen h-fit flex justify-center">
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
                      <h1 className="m-5 font-bold text-xl">{e.name.common}</h1>
                      <div className="lg:flex justify-between w-full mx-5">
                        <ul>
                          <li className="my-1">
                            <span className="font-bold">Native Name: </span>{" "}
                            {e.name.official}
                          </li>
                          <li className="my-1">
                            <span className="font-bold">Population: </span>{" "}
                            {Number(e.population).toLocaleString("en-US")}
                          </li>
                          <li className="my-1">
                            <span className="font-bold">Region: </span>{" "}
                            {e.region}
                          </li>
                          <li className="my-1">
                            <span className="font-bold">Subregion: </span>{" "}
                            {e.subregion}
                          </li>
                          <li className="my-1">
                            <span className="font-bold">Capital: </span>{" "}
                            {e.capital}
                          </li>
                        </ul>
                        <ul className="mt-5">
                          <li className="my-1">
                            <span className="font-bold">
                              Top level Domain:{" "}
                            </span>{" "}
                            {e.tld[0]}
                          </li>
                          <li className="my-1">
                            <span className="font-bold">Currencies: </span>{" "}
                            {Object.entries(e.currencies).map((e) => e[1].name)}
                          </li>
                          <li className="my-1">
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
      </section> */}
    </>
  );
}

export default Cardpage;
