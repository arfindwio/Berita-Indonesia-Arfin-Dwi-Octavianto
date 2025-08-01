import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux Action
import { getNewsDetailAction } from "../../../redux/actions/news/NewsAction";

// Icons
import { BsCalendarEvent } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";

export const HeadlineCard = ({ data }) => {
  const dispatch = useDispatch();

  const formattedDate = new Date(data?.pubDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleClick = async (categoryBreadcrumb, newsDetail, category) => {
    await dispatch(
      getNewsDetailAction(categoryBreadcrumb, newsDetail, category),
    );
  };

  return (
    <div className="flex flex-col flex-wrap justify-between gap-6 md:flex-row md:gap-0">
      <div className="order-2 flex w-full flex-col gap-2 md:order-1 md:w-[40%] md:gap-4">
        <h5 className="text-base font-semibold text-[#526071]">Headline</h5>
        <h1
          className="text-2xl font-bold leading-[130%] text-[#333333] md:text-3xl lg:text-4xl"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          {data?.title}
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-normal leading-6 text-[#4F4F4F] md:text-base">
            {data?.description}
          </p>
          <div className="flex items-center gap-2">
            <BsCalendarEvent size={15} />
            <p className="text-xs font-medium text-[#526071] md:text-sm">
              {formattedDate}
            </p>
          </div>
        </div>
        <Link
          to={"/news-detail"}
          className="flex items-center gap-2 text-sm font-medium text-[#0090FF] md:text-base"
          onClick={() => handleClick("Olahraga", data, "olahraga")}
        >
          Baca Selengkapnya
          <BsArrowUpRight size={18} />
        </Link>
      </div>
      <img
        src={data?.thumbnail}
        alt={data?.title}
        loading="lazy"
        className="order-1 mx-auto w-full max-w-lg rounded-[20px] object-cover object-center md:order-2 md:mx-0 md:w-[45%] md:max-w-none"
      />
    </div>
  );
};
