import { useEffect, useState } from "react";
import Card from "./Card";

function FlagsSection() {
  const [flags, setFlags] = useState([]);
  const [defaultSearch, setDefaultSearch] = useState({});

  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(20);
  let myVar = 0;

  const [option, setOption] = useState('')

  const getAllCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    setFlags(data);
  };

  const getByRegion = async (region) => {
    const response2 = await fetch(`https://restcountries.com/v3.1/all`);
    const data2 = await response2.json();
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
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
    setOption(e.target.value)
  }

  useEffect(() => {
    if (option == 'Filter By Region') {
      getAllCountries();
    }else{
      getByRegion(option.toLowerCase())
    }
  }, [option]);

  useEffect(() => {
    window.addEventListener("scroll", handleChangeVariable);
  }, []);

  return (
    <>
      <section className="w-full min-h-screen h-fit pt-16">
        <div className="flex-colum items-center justify-between sm:flex">
          <div className="mt-10 sm:ml-16 sm:w-80 ml-5 mr-5">
            <div className="absolute w-10 h-10 flex items-center place-content-center m-1">
              <ion-icon name="search" size="medium"></ion-icon>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full pl-12 darkBlueElement nunito"
              onChange={SearchHandler}
            />
          </div>

          <select className="select darkBlueElement nunito ml-5 mt-10 mr-16" onClick={handleOptions}>
            <option  defaultValue>
              Filter By Region
            </option>
            <option>Europe</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Oceania</option>
          </select>
        </div>

        <div className="flex justify-center mt-10 ml-5 mr-5 sm:ml-16 sm:mr-16">
          <div className="w-fit h-screen flex justify-around flex-wrap">
            {flags.length === 0 ? (
              <div className="max-w-lg text-4xl text-center">
                <p>No se encontraron países</p>
              </div>
            ) : (
              flags
                .slice(prev, next)
                .map((e, index) => (
                  <Card
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
