import React, { useState } from "react";

//icons
//sun icon
import { FaSun } from "react-icons/fa";
//moon icon
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }



  return (
    <>
      <header className="fixed z-50 flex w-full dark:bg-darkBlueElement">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white">Country Info</h1>

          <div className="flex items-center">
            {theme === "light" ? (
              <FaMoon className="text-white text-2xl cursor-pointer" onClick={changeTheme} />
            ) : (
              <FaSun className="text-white text-2xl cursor-pointer" onClick={changeTheme} />
            )
            }
          </div>
        </div>


      </header>
    </>
  );
}

export default Header;
