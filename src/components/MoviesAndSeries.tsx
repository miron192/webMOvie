import { HomeProps, SearchMovie } from "@/types";
import Movies from "./Movies";

const MoviesAndSeries = async ({ searchParams }: HomeProps) => {
  const search = searchParams?.searchValue || "friends";
  const type = searchParams?.Type || "";
  const page = searchParams?.page || "1";

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDb_KEY}&s=${search}&type=${type}&page=${page}`
  );

  const result = await response.json();
  console.log(result);

  return (
    <div className="flex gap-5 flex-col">
      <h1 className="text-3xl">Movies and Series</h1>
      <Movies result={result.Search} />
    </div>
  );
};

export default MoviesAndSeries;
