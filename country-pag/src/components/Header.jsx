import React from "react";

function Header() {
  return (
    <>
      <div className="navbar darkBlueElement fixed z-50">
        <div className="flex-1">
          <a className=" m-1 normal-case text-xl nunito font-bold">
            Where in the world?
          </a>
        </div>
        {/* <div className="flex items-center btn btn-ghost">
          <ion-icon name="moon"></ion-icon>
          <a className="m-1 normal-case text-md munito font-bold">Dark Mode</a>
        </div> */}
      </div>
    </>
  );
}

export default Header;
