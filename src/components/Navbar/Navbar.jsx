import { useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "./constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-zinc-200">
      <div className="container px-4 mx-auto relative text-sm flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 mr-2" src={logo} alt="logo" />
          </div>
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            <li>some text</li>
            <li>other text</li>
          </ul> */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="tel:+78312661120"
              className="py-2 px-2 text-zinc-500 hover:scale-105 hover:text-zinc-700 transition ease-in-out duration-250"
            >
              +7 (831) 266-11-20
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:scale-105 transition ease-in-out duration-250 hover:from-orange-800 hover:to-orange-800"
            >
              Связаться с нами
            </a>
          </div>
        </div>

        <div className="lg:hidden md:flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 top-16 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden text-black">
            <ul>
              {navItems.map((item, i) => (
                <li key={i} className="py-4">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
