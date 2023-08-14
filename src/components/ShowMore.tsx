"use client";

import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const ShowMore = () => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(2);

  const handleNavigation = () => {
    setPageNumber((prev) => prev + 1);
    const newPathname = updateSearchParams("page", `${pageNumber}`);

    router.push(newPathname);
  };
  return (
    <button
      onClick={handleNavigation}
      className="self-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 max-w-[120px] rounded focus:outline-none focus:shadow-outline"
    >
      Show More
    </button>
  );
};

export default ShowMore;
