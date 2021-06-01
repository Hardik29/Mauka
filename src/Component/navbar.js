import React,{ useState, useEffect} from "react";
import logo from "./assest/logo.png";

function Navbar() {
   const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (200 < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (200 > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);
  
  
    return (
    <nav  className={`flex items-center justify-between flex-wrap bg-mysite-boldblue p-6 pt-4 sticky top-0 z-50 ${goingUp ? "" : "shadow-2xl"}`} >
      <div className="flex items-center flex-shrink-0 text-white mr-6 pl-20">
        <img src={logo} width="60" height="60" />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        </div>
        <ul className="pr-20">
          <li className="inline-block m-2">
            <button className="text-lg font-medium text-white dark:text-gray-100 group hover:text-mysite-mediumblue">
              <span>Home</span>
              <span className="block h-1 transition-transform scale-x-0 rounded-full transform group-hover:scale-x-100 bg-mysite-mediumblue"></span>
            </button>
          </li>
          <li className="inline-block m-2">
            <button className="text-lg font-medium text-white hover:text-mysite-mediumblue dark:text-gray-100 group">
              <span>CohortOne</span>
              <span className="block  h-1 transition-transform scale-x-0 rounded-full transform group-hover:scale-x-100 bg-mysite-mediumblue"></span>
            </button>
          </li>
          <li className="inline-block m-2">
            <button className="text-lg font-medium text-white dark:text-gray-100 group hover:text-mysite-mediumblue">
              <span className="flex justify-center item-center">
                Modolus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <span className="block  h-1 transition-transform scale-x-0 rounded-full transform group-hover:scale-x-100 bg-mysite-mediumblue"></span>
            </button>
          </li>
          <li className="inline-block m-2">
            <button className="text-lg font-medium text-white hover:text-mysite-mediumblue dark:text-gray-100 group">
              <span>Talk To Us</span>
              <span className="block  h-1 transition-transform scale-x-0 rounded-full transform group-hover:scale-x-100 bg-mysite-mediumblue"></span>
            </button>
          </li>
          <li className="inline-block m-2">
            <button className="text-lg font-medium text-white hover:text-mysite-mediumblue dark:text-gray-100 group">
              <span>Join</span>
              <span className="block  h-1 transition-transform scale-x-0 rounded-full transform group-hover:scale-x-100 bg-mysite-mediumblue"></span>
            </button>
          </li>
          <li className="inline-block m-2">
            <button className="text-lg font-medium text-white hover:text-mysite-mediumblue dark:text-gray-100 group">
              <span>Login</span>
              <span className="block  h-1 transition-transform scale-x-0 rounded-full transform group-hover:scale-x-100 bg-mysite-mediumblue"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
