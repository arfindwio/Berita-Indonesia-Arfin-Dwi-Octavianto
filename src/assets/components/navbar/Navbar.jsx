import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Images
import Logo from "../../img/Berita-Kini_Logo.svg";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPath = location.pathname;

  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Terbaru", path: "/terbaru" },
    { label: "Hiburan", path: "/hiburan" },
    { label: "Gaya Hidup", path: "/gaya-hidup" },
    { label: "Olahraga", path: "/olahraga" },
    { label: "Nasional", path: "/nasional" },
    { label: "Internasional", path: "/internasional" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = currentPath === path;
    if (isScrolled) {
      return `text-sm lg:text-base font-${isActive ? "bold" : "semibold"} text-white`;
    } else {
      return `text-sm lg:text-base font-${isActive ? "bold text-[#0090FF]" : "semibold text-[#828282] hover:text-[#0090FF]"} `;
    }
  };
  return (
    <>
      <header
        className={`${isScrolled ? "bg-[#0090FF]" : "bg-white"} fixed z-10 flex w-full justify-center border-b px-4 py-4 sm:px-6 md:px-8`}
      >
        <div className="flex w-full max-w-7xl items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              className={`${isScrolled ? "brightness-0 invert" : ""} h-11 w-11 object-contain`}
            />
            <h5
              className={`${isScrolled ? "text-white" : "text-black"} text-lg font-semibold lg:text-xl`}
            >
              Berita Kini
            </h5>
          </Link>
          <RxHamburgerMenu
            size={35}
            className={`${isScrolled ? "text-white hover:bg-slate-200 hover:bg-opacity-50" : "text-[#828282] hover:bg-slate-100"} cursor-pointer rounded-md p-2 md:hidden`}
            onClick={() => setIsSidebarOpen(true)}
          />

          <ul
            className="hidden items-center md:flex md:gap-3 lg:gap-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {navItems.map(({ label, path }) => (
              <Link key={path} to={path} className={getLinkClass(path)}>
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </header>
      {isSidebarOpen && (
        <div className="fixed right-0 z-10 h-screen w-screen bg-black bg-opacity-50 md:hidden">
          <div
            className={`${isScrolled ? "bg-[#0090FF]" : "bg-white"} fixed bottom-0 right-0 top-0 flex h-screen w-full max-w-xs flex-col`}
          >
            <div className="flex w-full items-center justify-between border-b px-4 py-4 sm:px-6 md:px-8">
              <Link to={"/"} className="flex items-center gap-2">
                <img
                  src={Logo}
                  alt="Logo"
                  loading="lazy"
                  className={`${isScrolled ? "brightness-0 invert" : ""} h-11 w-11 object-contain`}
                />
                <h5
                  className={`${isScrolled ? "text-white" : "text-black"} text-lg font-semibold lg:text-xl`}
                >
                  Berita Kini
                </h5>
              </Link>
              <IoMdClose
                size={40}
                className={`${isScrolled ? "text-white hover:bg-slate-200 hover:bg-opacity-50" : "text-[#828282] hover:bg-slate-100"} cursor-pointer rounded-md p-2 md:hidden`}
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>

            <ul
              className="flex flex-col gap-4 px-4 py-4 sm:px-6 md:px-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {navItems.map(({ label, path }) => (
                <Link key={path} to={path} className={getLinkClass(path)}>
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
