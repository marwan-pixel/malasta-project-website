import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar({ scroll }) {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rental", href: "/rental" },
    { name: "Catalog", href: "/catalog" },
  ];
  return (
    <div
      className={` absolute top-0 left-0 w-full flex items-center z-10 ${
        scroll ? "navbar-fixed" : ""
      }`}
    >
      <div className="container ">
        <div className="flex items-center justify-between relative ">
          <div className="px-5">
            <h1 className="sm:text-[1.7rem] text-primary text-xl font-semibold font-inter block py-6">
              Malasta Adventure
            </h1>
          </div>
          <div className="flex item-center px-5">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block right-4 bottom-4 absolute z-10 lg:hidden ${
                hamburgerClick ? "hamburger-active" : ""
              }`}
              onClick={() => {
                setHamburgerClick(!hamburgerClick);
              }}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              className={`navbar-link lg:flex items-center justify-center text-xl font-semibold static ${
                !hamburgerClick
                  ? "hidden"
                  : " absolute bg-white w-full h-screen right-0 top-0 "
              } `}
            >
              <ul className="flex lg:flex-row h-full justify-evenly flex-col text-gray-300 items-center gap-x-8 ">
                {navigation.map((item) => (
                  <li className="group" key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => {
                        return isActive
                          ? "text-primary"
                          : "group-hover:text-primary";
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
