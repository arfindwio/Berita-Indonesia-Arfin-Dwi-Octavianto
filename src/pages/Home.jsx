import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { Navbar } from "../assets/components/navbar/Navbar";
import { HeadlineCard } from "../assets/components/card/HeadlineCard";
import { PopularNewCard } from "../assets/components/card/PopularNewsCard";
import { RecommendationCard } from "../assets/components/card/RecommendationCard";
import { NewsPagination } from "../assets/components/pagination/NewsPagination";
import { Footer } from "../assets/components/footer/Footer";

// Redux Action
import { getCnnNewsAction } from "../redux/actions/news/NewsAction";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

// Images
import Image4 from "../assets/img/Image4.svg";

export const Home = () => {
  const dispatch = useDispatch();

  const sportsNewsData = useSelector(
    (state) => state.news?.newsByCategory?.olahraga,
  );
  const nationalNewsData = useSelector(
    (state) => state.news?.newsByCategory?.nasional,
  );
  const latestlNewsData = useSelector(
    (state) => state.news?.newsByCategory?.terbaru,
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(latestlNewsData?.length / 8);
  const startIndex = (currentPage - 1) * 8;
  const currentData = latestlNewsData?.slice(startIndex, startIndex + 8);

  const maxIndex = Math.min(sportsNewsData?.length, 10) - 1;

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
            {sportsNewsData?.length > 0 && (
              <HeadlineCard data={sportsNewsData[currentIndex]} />
            )}
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
              {nationalNewsData?.slice(0, 3).map((item, index) => (
                <PopularNewCard key={index} data={item} index={index} />
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
              className="sm:gap:10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-14"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {currentData?.slice(0, 8).map((item, index) => (
                <RecommendationCard key={index} data={item} />
              ))}
            </div>
            <NewsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              startIndex={startIndex}
              totalItems={latestlNewsData?.length}
              itemsPerPage={8}
            />
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
      </div>

      <Footer />
    </>
  );
};
