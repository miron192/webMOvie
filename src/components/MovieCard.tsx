import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  year: string;
  img: string;
  id: string;
}

const MovieCard = ({ title, year, img, id }: Props) => {
  return (
    <div className="flex flex-col  rounded-lg bg-gray-100 drop-shadow-lg  gap-2 max-w-[190px]  min-w-[180px]">
      <Link href={`/movie/${id}`}>
        {img === "N/A" ? (
          <div
            className="min-w-[180px] text-center flex items-center justify-center
          min-h-[270px]"
          >
            <h1 className="text-xl">Can&apos;t found image</h1>
          </div>
        ) : (
          <Image
            src={img}
            width={190}
            height={270}
            alt={title}
            className="rounded-t-lg min-h-[270px] max-h-[270px]"
          />
        )}
      </Link>
      <div className="flex flex-col gap-3 px-2">
        <Link href="/movie/harrypotter">
          <h3 className="text-bold text-xl break-words">{title}</h3>
        </Link>
        <h4 className=" text-gray-600 pb-3">{year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
