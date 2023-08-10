import Movies from "@/components/Movies";
import MoviesAndSeries from "@/components/MoviesAndSeries";

import { HomeProps } from "@/types";

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="flex flex-col px-9 py-5">
      <div className="flex flex-col gap-8">
        <MoviesAndSeries searchParams={searchParams} />
      </div>
    </main>
  );
}
