import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === "") {
      return alert("Please enter data");
    }

    updateSearchParams(search.toLowerCase());
  };

  const updateSearchParams = (search: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (search) {
      searchParams.set("searchValue", search);
    } else {
      searchParams.delete("searchValue");
    }

    const newPathname = `${window.location.origin}?${searchParams.toString()}`;

    setSearch("");

    router.push(newPathname);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <form action="submit" onSubmit={handleSearch}>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-500 w-full"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
