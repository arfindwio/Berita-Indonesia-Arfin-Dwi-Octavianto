import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../img/Berita-Kini_Logo.svg";

// Icons
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-[#2C3C4D] py-16">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-6 lg:gap-4 xl:px-0">
        <div className="col-span-1 flex w-full flex-col gap-4 sm:col-span-2 lg:gap-10">
          <div className="flex flex-col gap-3 lg:gap-5">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo"
                loading="lazy"
                className="h-[68px] w-[68px] object-contain brightness-0 invert"
              />
              <h5 className="text-2xl font-semibold text-white sm:text-3xl">
                Berita Kini
              </h5>
            </div>
            <p
              className="text-sm font-normal text-[#F2F2F2] sm:text-lg"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              © 2023 Berita Kini. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5">
            <p className="text-lg font-semibold text-white sm:text-[22px]">
              Ikuti Kami
            </p>
            <ul className="flex items-center gap-2 lg:gap-4">
              <Link to={"/"}>
                <FaYoutube
                  size={20}
                  className="h-10 w-10 rounded-xl bg-[#E0E0E0] p-2"
                />
              </Link>
              <Link to={"/"}>
                <FaInstagram
                  size={20}
                  className="h-10 w-10 rounded-xl bg-[#E0E0E0] p-2"
                />
              </Link>
              <Link to={"/"}>
                <FaFacebook
                  size={20}
                  className="h-10 w-10 rounded-xl bg-[#E0E0E0] p-2"
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 lg:gap-6">
          <h5 className="text-lg font-semibold text-white sm:text-[22px]">
            Telusuri
          </h5>
          <ul className="flex flex-col gap-2 lg:gap-3">
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Beranda
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Kesehatan
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Otomotif
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Politik
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Olahraga
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Nasional
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Internasional
            </Link>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-3 lg:gap-6">
          <h5 className="textlg font-semibold text-white sm:text-[22px]">
            Bantuan
          </h5>
          <ul className="flex flex-col gap-2 lg:gap-3">
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Kontak Kami
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Laporan Pembajakan
            </Link>
            <Link
              to={"/"}
              className="text-sm font-medium text-[#F2F2F2] hover:text-[#0090FF] sm:text-base"
            >
              Kebijakan
            </Link>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-3 sm:col-span-2 lg:gap-6">
          <h5 className="text-lg font-semibold text-white sm:text-[22px]">
            Berlangganan Berita Terbaru
          </h5>
          <div className="relative w-full max-w-sm">
            <input
              type="email"
              placeholder="Masukan email"
              className="w-full rounded-lg border p-3 pr-16 focus:outline-none sm:p-5"
            />
            <button className="absolute bottom-2 right-3 flex h-8 w-8 items-center justify-center rounded-md bg-[#0090FF] p-2 sm:h-12 sm:w-12 sm:p-3">
              <FaTelegramPlane size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
