import React, { useState, useEffect } from "react";

//icons
//sun icon
import { FaSun } from "react-icons/fa";
//moon icon
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState("light");

  //handle theme
  const handleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  //get theme
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  //set theme
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);




  return (
    <>
      <header className="fixed z-50 flex w-full dark:bg-darkBlueElement bg-[#f8f8f8] shadow-lg  ">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold dark:text-white">Country Info</h1>

          <div className="flex items-center">
          {theme === "light" ? (
            <FaSun
              onClick={handleTheme}
              className="cursor-pointer mx-5 w-[20px] h-6 text-yellow-500"
            />
          ) : (
            <FaMoon
              onClick={handleTheme}
              className="cursor-pointer mx-5 w-[20px] h-6 text-white"
            />
          )}
          </div>
        </div>


      </header>
    </>
  );
}

export default Header;
