import { SearchMovie } from "@/types";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import ShowMore from "./ShowMore";
import Link from "next/link";

const Movies = ({ result }: { result: SearchMovie[] }) => {
  const type = [
    { title: "Type", value: "" },
    { title: "Movie", value: "movie" },
    { title: "Series", value: "series" },
  ];

  const data = result;

  if (!data) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl">No more movies</h2>{" "}
        <Link href="/">
          <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 max-w-[140px] rounded focus:outline-none focus:shadow-outline">
            Back to page initial page
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      <Filter title="Type" options={type} />

      <div className="flex gap-5 p-2  flex-wrap justify-center">
        {data.map((item) => (
          <MovieCard
            id={item.imdbID}
            key={item.imdbID}
            title={item.Title}
            year={item.Year}
            img={item.Poster}
          />
        ))}
      </div>
      <ShowMore />
    </div>
  );
};

export default Movies;
