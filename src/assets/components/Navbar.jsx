import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../img/Berita-Kini_Logo.svg";

export const Navbar = () => {
  return (
    <>
      <header className="fixed z-10 flex w-full justify-center border-b bg-white px-10 py-4">
        <div className="flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              className="h-11 w-11 object-contain"
            />
            <h5 className="text-xl font-semibold">Berita Kini</h5>
          </div>
          <ul
            className="flex items-center gap-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Beranda
            </Link>
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Terbaru
            </Link>
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Hiburan
            </Link>
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Gaya Hidup
            </Link>
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Olahraga
            </Link>
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Nasional
            </Link>
            <Link
              to={"/"}
              className="text-base font-semibold text-[#828282] hover:text-[#0090FF]"
            >
              Internasional
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};
