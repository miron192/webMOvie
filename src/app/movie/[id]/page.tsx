import Image from "next/image";

type Props = {
  params: { id: string };
};

const Movie = async ({ params }: Props) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDb_KEY}&i=${params.id}`
  );

  const result = await response.json();

  return (
    <div className=" lg:justify-around gap-5 max-w-screen-xl mx-auto mt-8 lg:flex items-center justify-center px-8 ">
      <div className="flex-1">
        <Image
          src={result.Poster}
          width={350}
          height={450}
          alt="harry"
          className="p-5 mx-auto"
        />
      </div>
      <div className="flex flex-col gap-6 flex-1 justify-center ">
        <h1 className="text-4xl">{result.Title}</h1>
        <div className="flex flex-col gap-3 text-gray-900">
          <p>{result.Plot}</p>
          <div>
            <span className="text-blue-800">Release Date:</span> {result.Year}
          </div>
          <div>
            <span className="text-blue-800">Duration: </span>
            {result.Runtime}
          </div>
          <div className="flex items-center gap-1">
            <div>
              <span className="text-blue-800">Rating:</span>
            </div>
            <Image src="/star.svg" width={15} height={15} alt="star" />{" "}
            {result.imdbRating}
          </div>
          <div>
            <span className="text-blue-800">Country: </span>
            {result.Country}
          </div>
          <div>
            <span className="text-blue-800">Actors:</span> {result.Actors}
          </div>
          <div>
            <span className="text-blue-800">Rated: </span>
            {result.Rated}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
