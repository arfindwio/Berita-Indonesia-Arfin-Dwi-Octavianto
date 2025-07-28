import React from "react";

// Icons
import { LuDot } from "react-icons/lu";

export const PopularNewCard = ({ thumbnail, title, date, index }) => {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="relative grid h-fit grid-cols-3 gap-2 md:gap-4">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="col-span-1 rounded-xl object-cover object-center"
      />
      <div className="col-span-2 flex flex-col">
        <p className="mb-auto text-sm font-bold leading-[140%] md:text-base">
          {title}
        </p>
        <div
          className="flex items-center gap-0 pb-2 md:gap-1"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p className="text-xs font-semibold text-[#0090FF] md:text-sm">
            Nasional
          </p>
          <LuDot size={25} className="text-[#526071] opacity-50" />
          <p className="text-xs font-medium text-[#526071] md:text-sm">
            {formattedDate}
          </p>
        </div>
      </div>
      <p className="absolute -left-3 -top-4 scale-75 rounded-full bg-black px-3 py-1 text-lg font-bold text-white sm:scale-100">
        {index + 1}
      </p>
    </div>
  );
};
