"use client";

import Link from "next/link";

import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center navbar h-16 bg-blue-300">
      <Link className="text-2xl font-bold" href="/">
        WebMovie
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
