import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import { Navbar } from "../assets/components/navbar/Navbar";
import { PopularNewCard } from "../assets/components/card/PopularNewsCard";
import { RecommendationCard } from "../assets/components/card/RecommendationCard";
import { Footer } from "../assets/components/footer/Footer";

// Images
import Image1 from "../assets/img/Image1.svg";
import Image5 from "../assets/img/Image5.svg";
import Image6 from "../assets/img/Image6.svg";
import Image7 from "../assets/img/Image7.svg";

// Icons
import { BsHouse } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";

export const NewsDetail = () => {
  const nationalNewsData = useSelector(
    (state) => state.news?.newsByCategory?.nasional,
  );
  const newsDetailData = useSelector((state) => state.news?.newsDetail);

  const [comment, setComment] = useState("");

  const formattedDate = new Date(
    newsDetailData?.newsDetail?.pubDate,
  ).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 50) {
      setComment(value);
    }
  };

  const desktopComment = () => {
    return (
      <div className="hidden w-full gap-4 border-b py-6 sm:flex">
        <img
          src={Image6}
          alt="Image 6"
          className="aspect-square h-14 w-14 rounded-md object-cover"
        />
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full gap-2">
            <p className="text-sm font-medium text-[#526071]">
              UJANG YUSMEIDI S.P., M.Agr.
            </p>
            <LuDot size={25} className="text-[#526071] opacity-50" />
            <p className="text-sm font-normal text-[#959EA9]">
              28 Mar 2024 11:15
            </p>
          </div>
          <p className="text-base font-normal text-[#333333]">
            Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena
            saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana
            ya solusinya ?
          </p>
          <p className="text-base font-medium text-[#0090FF]">Balas</p>
          <div className="flex w-full gap-4">
            <img
              src={Image7}
              alt="Image 7"
              className="aspect-square h-14 w-14 rounded-md object-cover"
            />
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full gap-2">
                <p className="text-sm font-medium text-[#526071]">
                  DINA RIKHA RIYANAWATI, S.Pd
                </p>
                <LuDot size={25} className="text-[#526071] opacity-50" />
                <p className="text-sm font-normal text-[#959EA9]">
                  28 Mar 2024 11:15
                </p>
              </div>
              <p className="text-base font-normal text-[#333333]">
                saya mengunduh sertifikatnya kok juga belumbisa
              </p>
              <p className="text-base font-medium text-[#0090FF]">Balas</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const mobileComment = () => {
    return (
      <>
        <div className="flex flex-col gap-2 border-b py-6 sm:hidden">
          <div className="flex w-full gap-4">
            <img
              src={Image6}
              alt="Image 6"
              className="aspect-square h-14 w-14 rounded-md object-cover"
            />
            <div className="flex w-full flex-col">
              <p className="line-clamp-1 text-sm font-medium text-[#526071]">
                UJANG YUSMEIDI S.P., M.Agr.
              </p>
              <p className="text-sm font-normal text-[#959EA9]">
                28 Mar 2024 11:15
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-normal text-[#333333]">
              Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ?
              Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah
              Bagaimana ya solusinya ?
            </p>
            <p className="text-sm font-medium text-[#0090FF]">Balas</p>
          </div>
          <div className="ml-4 flex flex-col gap-1">
            <div className="flex w-full gap-4">
              <img
                src={Image7}
                alt="Image 7"
                className="aspect-square h-14 w-14 rounded-md object-cover"
              />
              <div className="flex w-full flex-col">
                <p className="line-clamp-1 text-sm font-medium text-[#526071]">
                  DINA RIKHA RIYANAWATI, S.Pd
                </p>
                <p className="text-sm font-normal text-[#959EA9]">
                  28 Mar 2024 11:15
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-[#333333]">
                saya mengunduh sertifikatnya kok juga belumbisa
              </p>
              <p className="text-sm font-medium text-[#0090FF]">Balas</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />

        <section
          className="flex w-full justify-center pt-32"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className="flex w-full max-w-7xl flex-wrap items-center gap-1 px-4 sm:gap-2 sm:px-6 md:px-8 xl:px-0">
            <BsHouse size={17} className="text-[#333333]" />
            <p className="text-base font-normal text-[#333333] sm:text-lg">
              Beranda
            </p>
            <IoIosArrowForward size={15} className="text-[#333333]" />
            <p className="text-base font-normal text-[#333333] sm:text-lg">
              {newsDetailData.newsDetail?.category}
            </p>
            <IoIosArrowForward size={15} className="text-[#333333]" />

            <p className="text-base font-normal text-[#333333] sm:text-lg">
              Detail
            </p>
          </div>
        </section>

        <div className="flex w-full justify-center gap-4 py-14 sm:py-20">
          <div className="col-span-1 grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-3 xl:px-0">
            <div className="col-span-1 flex w-full flex-col gap-6 lg:col-span-2">
              <section className="flex w-full flex-col gap-3 sm:gap-4 md:gap-6">
                <h1
                  className="text-2xl font-semibold text-[#333333] md:text-3xl lg:text-4xl"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {newsDetailData?.newsDetail?.title}
                </h1>
                <div
                  className="flex items-center gap-0 md:gap-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <p className="text-xs font-semibold text-[#0090FF] md:text-sm">
                    {newsDetailData?.newsDetail?.category}
                  </p>
                  <LuDot size={25} className="text-[#526071] opacity-50" />
                  <p className="text-xs font-medium text-[#526071] md:text-sm">
                    {formattedDate}
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <img
                    src={Image1}
                    alt="Image1"
                    loading="lazy"
                    className="w-full rounded-2xl object-cover"
                  />
                  <p className="line-clamp-1 text-sm font-medium text-[#959EA9] sm:text-base">
                    {newsDetailData?.newsDetail?.description}
                  </p>
                </div>
                <p className="mt-4 text-sm font-medium text-[#526071] sm:text-base">
                  Jakarta, CNN Indonesia --
                  {newsDetailData?.newsDetail?.description}
                </p>
              </section>

              <section
                className="col-span-1 mt-10 flex flex-col gap-10 sm:mt-20"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <h3
                  className="border-l-4 border-[#0090FF] pl-4 text-xl font-bold md:text-2xl"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  Komentar
                </h3>
                <div className="flex w-full flex-col">
                  <div className="flex w-full gap-4 border-b py-2 sm:py-6">
                    <img
                      src={Image5}
                      alt="Image 5"
                      className="aspect-square h-14 w-14 rounded-md object-cover"
                    />
                    <form className="flex w-full flex-col gap-2">
                      <textarea
                        name="comment"
                        rows="2"
                        placeholder="Apa yang ingin anda tanyakan?"
                        className="w-full resize-none rounded-lg border px-4 py-3"
                        value={comment}
                        onChange={handleChange}
                      ></textarea>
                      <p className="ml-auto text-xs font-normal text-[#526071]">
                        0/50
                      </p>
                      <button className="w-fit rounded-lg bg-[#0090FF] px-3 py-1 font-medium text-white sm:px-5 sm:py-[14px]">
                        Kirim
                      </button>
                    </form>
                  </div>
                  {desktopComment()}
                  {mobileComment()}
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-0">
                  <div className="flex w-fit items-center gap-2">
                    <p className="text-base font-normal text-[#333333]">
                      Item per page
                    </p>
                    <select className="border-b text-base font-normal text-[#333333]">
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                    <p className="text-base font-normal text-[#333333]">
                      of 200
                    </p>
                  </div>
                  <div className="flex w-fit items-center justify-center gap-4 text-[#828282] md:gap-6">
                    <IoIosArrowBack size={18} className="cursor-pointer" />
                    <p className="text-base font-medium tracking-widest">1</p>
                    <p className="text-base font-medium tracking-widest">2</p>
                    <IoIosArrowForward size={18} className="cursor-pointer" />
                  </div>
                </div>
              </section>

              <section
                className="col-span-1 mt-10 flex flex-col gap-4 sm:mt-20"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="border-l-4 border-[#0090FF] pl-4 text-xl font-bold md:text-2xl"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Berita Terkait
                  </h3>
                  <Link
                    to={"/"}
                    className="h-fit rounded-lg border border-[#0090FF] bg-[#E2F2FF] px-3 py-1 text-center text-sm font-medium text-[#0090FF] sm:px-5 sm:py-[14px] sm:text-base"
                  >
                    Lihat Semua
                  </Link>
                </div>
                <div
                  className="sm:gap:10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-14"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {newsDetailData?.relatedNews
                    ?.slice(0, 3)
                    .map((item, index) => (
                      <RecommendationCard key={index} data={item} />
                    ))}
                </div>
              </section>
            </div>
            <section
              className="col-span-1 flex flex-col gap-10 py-5 sm:gap-14 sm:py-0"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <h3 className="border-l-4 border-[#0090FF] pl-4 text-xl font-bold md:text-2xl">
                Berita Populer
              </h3>
              <div className="flex w-full flex-col gap-4">
                {nationalNewsData?.slice(0, 3).map((item, index) => (
                  <PopularNewCard key={index} data={item} index={index} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
