import { useEffect, useState } from "react";
import Card from "./Card";

function FlagsSection() {
  const [flags, setFlags] = useState([]);
  const [defaultSearch, setDefaultSearch] = useState({});

  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(20);
  let myVar = 0;

  const [option, setOption] = useState("");

  const getAllCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    setFlags(data);
  };

  const getByRegion = async (region) => {
    const response2 = await fetch(`https://restcountries.com/v3.1/all`);
    const data2 = await response2.json();
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();
    if (Array.isArray(data)) {
      setFlags(data);
    } else {
      setFlags(data2);
    }
  };

  const getByName = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    if (Array.isArray(data)) {
      setFlags(data);
    } else {
      setFlags([]);
    }
  };

  const SearchHandler = (e) => {
    const split_string = e.target.value.split("");
    if (split_string >= 0) {
      getAllCountries();
    } else {
      getByName(e.target.value);
    }
  };

  // Función que verifica si se llegó al final de la página
  const isBottomOfPage = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    return scrollTop + windowHeight >= documentHeight;
  };

  const handleChangeVariable = () => {
    if (isBottomOfPage()) {
      myVar += 20;
      setNext((myVar += 20));
    }
  };

  const handleOptions = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    if (option == "Filter By Region") {
      getAllCountries();
    } else {
      getByRegion(option.toLowerCase());
    }
  }, [option]);

  useEffect(() => {
    window.addEventListener("scroll", handleChangeVariable);
  }, []);

  return (
    <>
      <section className="w-full min-h-screen pt-16 dark:bg-veryDarkBlue bg-slate-100">
        <div className="flex justify-center w-full">
          <div className="container w-full sm:flex justify-between mt-5 pl-3 md:pl-0">
              <input
                type="text"
                placeholder="Search for a country..."
                className="md:w-96 p-3 rounded-md dark:bg-darkBlueElement dark:text-veryLightGray bg-[#f8f8f8] shadow-lg"
                onChange={SearchHandler}
              />


              <select
                className="md:w-96 p-3 mt-3 ml-2 sm:mt-0 pl-5 rounded-lg dark:bg-darkBlueElement dark:text-white bg-[#f8f8f8] shadow-lg"
                onChange={handleOptions}
              >
                <option>Filter By Region</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
            </div>
       
        </div>


        <div className="flex justify-center mt-10 ml-5 mr-5 sm:ml-16 sm:mr-16">
          <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {flags.length === 0 ? (
              <div className="max-w-lg text-4xl text-center">
                {

                }
              </div>
            ) : (
              flags
                .slice(prev, next)
                .map((e, index) => (
                  <Card
                    id={e.name.common}
                    key={index}
                    flags={e.flags.png}
                    name={e.name.common}
                    population={e.population}
                    region={e.region}
                    capital={e.capital}
                  />
                ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FlagsSection;
