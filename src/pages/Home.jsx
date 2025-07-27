import React from "react";
import { Link } from "react-router-dom";

// Components
import { Navbar } from "../assets/components/Navbar";

// Icons
import { BsCalendarEvent } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

// Images
import Image1 from "../assets/img/Image1.svg";
import Image2 from "../assets/img/Image2.svg";
import Image3 from "../assets/img/Image3.svg";
import Image4 from "../assets/img/Image4.svg";
import Logo from "../assets/img/Berita-Kini_Logo.svg";

export const Home = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <section
          className="flex w-full justify-center pt-32"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col gap-10">
            <div className="flex flex-wrap justify-between">
              <div className="flex w-[40%] flex-col gap-4">
                <h5 className="text-base font-semibold text-[#526071]">
                  Headline
                </h5>
                <h1
                  className="text-4xl font-bold leading-[130%] text-[#333333]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
                  Kualifikasi
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-base font-normal leading-6 text-[#4F4F4F]">
                    Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons
                    peluang Timnas Indonesia pindah dari Stadion Utama Gelora
                    Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi
                    Piala Dunia 2026.
                  </p>
                  <div className="flex items-center gap-2">
                    <BsCalendarEvent size={15} />
                    <p className="text-sm font-medium text-[#526071]">
                      22 Januari 2024
                    </p>
                  </div>
                </div>
                <Link
                  to={""}
                  className="flex items-center gap-2 text-base font-medium text-[#0090FF]"
                >
                  Baca Selengkapnya
                  <BsArrowUpRight size={18} />
                </Link>
              </div>
              <img
                src={Image1}
                alt="Image1"
                loading="lazy"
                className="w-[45%] rounded-[20px] object-cover object-center"
              />
            </div>
            <div className="flex w-full items-center justify-center gap-6 text-[#828282]">
              <IoIosArrowBack size={18} />
              <p
                className="text-base font-medium tracking-widest"
                style={{ wordSpacing: "0.75rem" }}
              >
                1 dari 5
              </p>
              <IoIosArrowForward size={18} />
            </div>
          </div>
        </section>

        <section
          className="flex w-full justify-center pt-32"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col gap-10">
            <h3 className="border-l-4 border-[#0090FF] pl-4 text-2xl font-bold">
              Berita Populer
            </h3>
            <div className="grid w-full grid-cols-3 gap-4">
              <div className="relative grid grid-cols-3 gap-4">
                <img
                  src={Image2}
                  alt="Image2"
                  loading="lazy"
                  className="col-span-1 rounded-xl object-cover object-center"
                />
                <div className="col-span-2 flex flex-col items-start justify-center">
                  <p className="mb-auto text-base font-bold leading-[140%]">
                    Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4
                    Sandera Hamas?
                  </p>
                  <div
                    className="flex items-center gap-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <p className="text-sm font-semibold text-[#0090FF]">
                      Politik
                    </p>
                    <LuDot size={25} className="text-[#526071] opacity-50" />
                    <p className="text-sm font-medium text-[#526071]">
                      22 Jan 2024
                    </p>
                  </div>
                </div>
                <p className="absolute -left-3 -top-4 h-fit w-fit rounded-full bg-black px-3 py-1 text-lg font-bold text-white">
                  1
                </p>
              </div>
              <div className="relative grid grid-cols-3 gap-4">
                <img
                  src={Image2}
                  alt="Image2"
                  loading="lazy"
                  className="col-span-1 rounded-xl object-cover object-center"
                />
                <div className="col-span-2 flex flex-col items-start justify-center">
                  <p className="mb-auto text-base font-bold leading-[140%]">
                    Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4
                    Sandera Hamas?
                  </p>
                  <div
                    className="flex items-center gap-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <p className="text-sm font-semibold text-[#0090FF]">
                      Politik
                    </p>
                    <LuDot size={25} className="text-[#526071] opacity-50" />
                    <p className="text-sm font-medium text-[#526071]">
                      22 Jan 2024
                    </p>
                  </div>
                </div>
                <p className="absolute -left-3 -top-4 h-fit w-fit rounded-full bg-black px-3 py-1 text-lg font-bold text-white">
                  2
                </p>
              </div>
              <div className="relative grid grid-cols-3 gap-4">
                <img
                  src={Image2}
                  alt="Image2"
                  loading="lazy"
                  className="col-span-1 rounded-xl object-cover object-center"
                />
                <div className="col-span-2 flex flex-col items-start justify-center">
                  <p className="mb-auto text-base font-bold leading-[140%]">
                    Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4
                    Sandera Hamas?
                  </p>
                  <div
                    className="flex items-center gap-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <p className="text-sm font-semibold text-[#0090FF]">
                      Politik
                    </p>
                    <LuDot size={25} className="text-[#526071] opacity-50" />
                    <p className="text-sm font-medium text-[#526071]">
                      22 Jan 2024
                    </p>
                  </div>
                </div>
                <p className="absolute -left-3 -top-4 h-fit w-fit rounded-full bg-black px-3 py-1 text-lg font-bold text-white">
                  3
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex w-full justify-center pt-32"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col gap-10">
            <div className="flex w-full items-center justify-between">
              <h3 className="border-l-4 border-[#0090FF] pl-4 text-2xl font-bold">
                Rekomendasi Untuk Anda
              </h3>
              <div className="relative w-[30%]">
                <input
                  type="text"
                  placeholder="Cari disini..."
                  className="w-full rounded-lg border border-[#E0E0E0] py-2 pl-3 pr-8"
                />
                <IoIosSearch
                  size={18}
                  className="absolute bottom-3 right-3 text-[#959EA9]"
                />
              </div>
            </div>
            <div
              className="grid grid-cols-4 gap-14"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex w-full flex-col gap-3">
                <img
                  src={Image3}
                  alt="Image3"
                  loading="lazy"
                  className="w-full rounded-xl object-cover object-center"
                />
                <p className="line-clamp-3 text-lg font-semibold">
                  Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
                  Session di RSUD Dr. Soetomo
                </p>
                <div
                  className="flex items-center gap-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-sm font-semibold text-[#0090FF]">
                    Politik
                  </p>
                  <LuDot size={25} className="text-[#526071] opacity-50" />
                  <p className="text-sm font-medium text-[#526071]">
                    22 Jan 2024
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3">
                <img
                  src={Image3}
                  alt="Image3"
                  loading="lazy"
                  className="w-full rounded-xl object-cover object-center"
                />
                <p className="line-clamp-3 text-lg font-semibold">
                  Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
                  Session di RSUD Dr. Soetomo
                </p>
                <div
                  className="flex items-center gap-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-sm font-semibold text-[#0090FF]">
                    Politik
                  </p>
                  <LuDot size={25} className="text-[#526071] opacity-50" />
                  <p className="text-sm font-medium text-[#526071]">
                    22 Jan 2024
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3">
                <img
                  src={Image3}
                  alt="Image3"
                  loading="lazy"
                  className="w-full rounded-xl object-cover object-center"
                />
                <p className="line-clamp-3 text-lg font-semibold">
                  Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
                  Session di RSUD Dr. Soetomo
                </p>
                <div
                  className="flex items-center gap-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-sm font-semibold text-[#0090FF]">
                    Politik
                  </p>
                  <LuDot size={25} className="text-[#526071] opacity-50" />
                  <p className="text-sm font-medium text-[#526071]">
                    22 Jan 2024
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3">
                <img
                  src={Image3}
                  alt="Image3"
                  loading="lazy"
                  className="w-full rounded-xl object-cover object-center"
                />
                <p className="line-clamp-3 text-lg font-semibold">
                  Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
                  Session di RSUD Dr. Soetomo
                </p>
                <div
                  className="flex items-center gap-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-sm font-semibold text-[#0090FF]">
                    Politik
                  </p>
                  <LuDot size={25} className="text-[#526071] opacity-50" />
                  <p className="text-sm font-medium text-[#526071]">
                    22 Jan 2024
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex w-full items-center justify-between"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p className="text-base font-normal text-[#333333]">
                Showing 1 to 10 of 97 results
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-[#526071]">
                  <IoIosArrowRoundBack size={20} />
                  Previous
                </button>
                <button className="rounded-lg bg-[#0090FF] px-4 py-2 text-base font-medium text-white">
                  1
                </button>
                <button className="rounded-lg px-4 py-2 text-base font-medium text-[#526071]">
                  2
                </button>
                <p className="rounded-lg px-4 py-2 text-base font-medium text-[#526071]">
                  ...
                </p>
                <button className="rounded-lg px-4 py-2 text-base font-medium text-[#526071]">
                  8
                </button>
                <button className="rounded-lg px-4 py-2 text-base font-medium text-[#526071]">
                  9
                </button>
                <button className="flex items-center gap-2 text-[#526071]">
                  Next
                  <IoIosArrowRoundForward size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex w-full justify-center py-32"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl justify-between rounded-3xl bg-[#00CAA3] px-24 py-10">
            <div className="flex w-[40%] flex-col gap-2">
              <h1 className="pt-2 text-[46px] font-semibold leading-tight text-white">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </h1>
              <p className="text-sm font-medium leading-tight text-white">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </p>
            </div>
            <img
              src={Image4}
              alt="Image4"
              loading="lazy"
              className="w-[45%] object-cover object-center"
            />
          </div>
        </section>

        <footer className="flex w-full justify-center bg-[#2C3C4D] py-16">
          <div className="grid w-full max-w-7xl grid-cols-6 gap-4">
            <div className="col-span-2 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <img
                    src={Logo}
                    alt="Logo"
                    loading="lazy"
                    className="h-[68px] w-[68px] object-contain brightness-0 invert"
                  />
                  <h5 className="text-3xl font-semibold text-white">
                    Berita Kini
                  </h5>
                </div>
                <p
                  className="text-lg font-normal text-[#F2F2F2]"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  © 2023 Berita Kini. All Rights Reserved.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[22px] font-semibold text-white">
                  Ikuti Kami
                </p>
                <ul className="flex items-center gap-4">
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
            <div className="col-span-1 flex flex-col gap-6">
              <h5 className="text-[22px] font-semibold text-white">Telusuri</h5>
              <ul className="flex flex-col gap-3">
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Beranda
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Kesehatan
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Otomotif
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Politik
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Olahraga
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Nasional
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Internasional
                </Link>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              <h5 className="text-[22px] font-semibold text-white">Bantuan</h5>
              <ul className="flex flex-col gap-3">
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Kontak Kami
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Laporan Pembajakan
                </Link>
                <Link
                  to={"/"}
                  className="text-base font-medium text-[#F2F2F2] hover:text-[#0090FF]"
                >
                  Kebijakan
                </Link>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col gap-6">
              <h5 className="text-[22px] font-semibold text-white">
                Berlangganan Berita Terbaru
              </h5>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Masukan email"
                  className="w-full rounded-lg border p-5 pr-16 focus:outline-none"
                />
                <button className="absolute bottom-2 right-3 flex h-12 w-12 items-center justify-center rounded-md bg-[#0090FF] p-3">
                  <FaTelegramPlane size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
