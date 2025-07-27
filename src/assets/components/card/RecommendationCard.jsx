import React from "react";

// Icons
import { LuDot } from "react-icons/lu";

export const RecommendationCard = ({ thumbnail, title, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="flex w-full flex-col gap-2 md:gap-3">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="w-full rounded-xl object-cover object-center"
      />
      <p className="line-clamp-3 text-sm font-semibold sm:text-base md:text-lg">
        {title}
      </p>
      <div
        className="flex items-center gap-0 md:gap-1"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <p className="text-xs font-semibold text-[#0090FF] md:text-sm">
          Ekonomi
        </p>
        <LuDot size={25} className="text-[#526071] opacity-50" />
        <p className="text-xs font-medium text-[#526071] md:text-sm">
          {formattedDate}
        </p>
      </div>
    </div>
  );
};
