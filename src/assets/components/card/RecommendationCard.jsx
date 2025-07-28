import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux Action
import { getNewsDetailAction } from "../../../redux/actions/news/NewsAction";

// Icons
import { LuDot } from "react-icons/lu";

export const RecommendationCard = ({ data }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const newsDetailData = useSelector((state) => state.news?.newsDetail);

  const formattedDate = new Date(data?.pubDate).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleClick = async (categoryBreadcrumb, newsDetail, category) => {
    await dispatch(
      getNewsDetailAction(categoryBreadcrumb, newsDetail, category),
    );
  };
  return (
    <Link to={"/news-detail"} className="flex w-full flex-col gap-2 md:gap-3">
      <img
        src={data?.thumbnail}
        alt={data?.title}
        loading="lazy"
        className="w-full rounded-xl object-cover object-center"
        onClick={() => handleClick("Ekonomi", data, "ekonomi")}
      />
      <p className="line-clamp-3 text-sm font-semibold sm:text-base md:text-lg">
        {data?.title}
      </p>
      <div
        className="flex items-center gap-0 md:gap-1"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <p className="text-xs font-semibold text-[#0090FF] md:text-sm">
          {location.pathname === "/news-detail"
            ? newsDetailData.newsDetail?.category
            : "Ekonomi"}
        </p>
        <LuDot size={25} className="text-[#526071] opacity-50" />
        <p className="text-xs font-medium text-[#526071] md:text-sm">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
};
