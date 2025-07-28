import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const getPaginationRange = (currentPage, totalPages) => {
  const delta = 1; // halaman di kiri & kanan currentPage yang ditampilkan
  const range = [];
  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  range.push(1); // selalu tampil halaman 1

  if (left > 2) {
    range.push("..."); // ellipsis setelah 1
  }

  for (let i = left; i <= right; i++) {
    if (totalPages - 1 !== i) {
      range.push(i);
    }
  }

  if (right < totalPages - 1) {
    range.push("...");
  }

  if (totalPages > 1) {
    range.push(totalPages - 1);
    range.push(totalPages);
  }

  return range;
};

export const NewsPagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  startIndex,
  totalItems,
  itemsPerPage,
}) => {
  const pages = getPaginationRange(currentPage, totalPages);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <p className="text-center text-sm text-[#333]">
        Showing {startIndex + 1} to{" "}
        {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems}{" "}
        results
      </p>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded px-3 py-1 text-[#526071] enabled:hover:bg-[#526071] enabled:hover:text-white enabled:hover:opacity-20 disabled:opacity-50"
        >
          <IoIosArrowRoundBack /> Prev
        </button>

        {pages.map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="select-none px-4 py-1 text-[#526071]"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`scale-75 rounded-lg px-4 py-2 text-base font-medium sm:scale-[0.85] md:scale-100 ${
                currentPage === page
                  ? "bg-[#0090FF] text-white"
                  : "text-[#526071] hover:bg-[#526071] hover:bg-opacity-20 hover:text-white"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 rounded px-3 py-1 text-[#526071] enabled:hover:bg-[#526071] enabled:hover:text-white enabled:hover:opacity-20 disabled:opacity-50"
        >
          Next <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};
