import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Navbar } from "../assets/components/navbar/Navbar";
import { HeadlineCard } from "../assets/components/card/HeadlineCard";
import { PopularNewCard } from "../assets/components/card/PopularNewsCard";
import { RecommendationCard } from "../assets/components/card/RecommendationCard";

// Redux Action
import { getCnnNewsAction } from "../redux/actions/news/NewsAction";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

// Images
import Image4 from "../assets/img/Image4.svg";
import Logo from "../assets/img/Berita-Kini_Logo.svg";

export const Home = () => {
  const dispatch = useDispatch();

  const sportsNewsData = useSelector(
    (state) => state.news.newsByCategory.olahraga,
  );
  const nationalNewsData = useSelector(
    (state) => state.news.newsByCategory.nasional,
  );
  const latestlNewsData = useSelector(
    (state) => state.news.newsByCategory.terbaru,
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.min(sportsNewsData.length, 10) - 1;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCnnNewsAction("terbaru"));
      await dispatch(getCnnNewsAction("nasional"));
      await dispatch(getCnnNewsAction("olahraga"));
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />

        <section
          className="flex w-full justify-center pt-32"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:gap-10 md:px-8 xl:px-0">
            <HeadlineCard
              title={sportsNewsData[currentIndex].title}
              description={sportsNewsData[currentIndex].description}
              date={sportsNewsData[currentIndex].pubDate}
              thumbnail={sportsNewsData[currentIndex].thumbnail}
            />
            <div className="flex w-full items-center justify-center gap-4 text-[#828282] md:gap-6">
              <IoIosArrowBack
                size={18}
                className="cursor-pointer"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              />
              <p
                className="text-base font-medium tracking-widest"
                style={{ wordSpacing: "0.75rem" }}
              >
                {currentIndex + 1} dari {maxIndex + 1}
              </p>
              <IoIosArrowForward
                size={18}
                className="cursor-pointer"
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
              />
            </div>
          </div>
        </section>

        <section
          className="flex w-full justify-center pt-20 md:pt-32"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 md:gap-10 md:px-8 xl:px-0">
            <h3 className="border-l-4 border-[#0090FF] pl-4 text-xl font-bold md:text-2xl">
              Berita Populer
            </h3>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nationalNewsData.slice(0, 3).map((item, index) => (
                <PopularNewCard
                  key={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  date={item.pubDate}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="flex w-full justify-center pt-20 md:pt-32"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 md:gap-10 md:px-8 xl:px-0">
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0 md:items-center">
              <h3 className="w-full border-l-4 border-[#0090FF] pl-4 text-xl font-bold md:w-fit md:text-2xl">
                Rekomendasi Untuk Anda
              </h3>
              <div className="relative w-full sm:w-[70%] md:w-[40%] lg:w-[35%]">
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
              className="sm:gap:10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-14"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {latestlNewsData.slice(0, 8).map((item, index) => (
                <RecommendationCard
                  key={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  date={item.pubDate}
                />
              ))}
            </div>
            <div
              className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p className="text-center text-xs font-normal text-[#333333] sm:text-sm md:text-start md:text-base">
                Showing 1 to 10 of 97 results
              </p>
              <div className="flex w-full flex-wrap items-center justify-center gap-0 md:w-fit md:justify-end md:gap-4">
                <button className="flex scale-75 items-center gap-2 text-[#526071] sm:scale-[0.85] md:scale-100">
                  <IoIosArrowRoundBack size={20} />
                  Previous
                </button>
                <button className="scale-75 rounded-lg bg-[#0090FF] px-4 py-2 text-base font-medium text-white sm:scale-[0.85] md:scale-100">
                  1
                </button>
                <button className="scale-75 rounded-lg px-4 py-2 text-base font-medium text-[#526071] hover:bg-[#526071] hover:bg-opacity-20 hover:text-white sm:scale-[0.85] md:scale-100">
                  2
                </button>
                <p className="scale-75 rounded-lg px-4 py-2 text-base font-medium text-[#526071] sm:scale-[0.85] md:scale-100">
                  ...
                </p>
                <button className="scale-75 rounded-lg px-4 py-2 text-base font-medium text-[#526071] hover:bg-[#526071] hover:bg-opacity-20 hover:text-white sm:scale-[0.85] md:scale-100">
                  8
                </button>
                <button className="scale-75 rounded-lg px-4 py-2 text-base font-medium text-[#526071] hover:bg-[#526071] hover:bg-opacity-20 hover:text-white sm:scale-[0.85] md:scale-100">
                  9
                </button>
                <button className="flex scale-75 items-center gap-2 text-[#526071] sm:scale-[0.85] md:scale-100">
                  Next
                  <IoIosArrowRoundForward size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex w-full justify-center px-4 py-20 sm:px-6 md:px-8 md:py-32 xl:px-0"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-col justify-between rounded-3xl bg-[#00CAA3] px-5 py-3 sm:flex-row sm:px-10 sm:py-5 md:px-16 md:py-8 lg:px-24 lg:py-10">
            <div className="order-2 flex w-full flex-col gap-2 text-center sm:order-1 sm:w-[40%] sm:text-start">
              <h1 className="pt-2 text-lg font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-[46px] xl:!leading-tight">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </h1>
              <p className="text-xs font-medium text-white sm:text-sm">
                Petualangan Edukatif bersama Malang Mbois City Tour!
              </p>
            </div>
            <img
              src={Image4}
              alt="Image4"
              loading="lazy"
              className="order-1 mx-auto w-full max-w-xs object-contain sm:order-2 sm:mx-0 sm:w-[55%] lg:w-[45%] lg:max-w-none"
            />
          </div>
        </section>

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
      </div>
    </>
  );
};
