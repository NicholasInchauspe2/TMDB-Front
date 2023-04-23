import Image from "next/image";
import { baseUrl, movie } from "../types"
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Array<movie>
}

export default function Banner({netflixOriginals}: Props) {
const [movie, setMovie] = useState<movie | null>(null);

useEffect(() => {
  setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
}, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[70vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt="Image" fill style={{objectFit: "cover"}} />
        </div>

        <h1 className="text-4xl font-bold md:text-4xl lg:text-7xl" >{ movie?.title }</h1>
        <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play</button>
          <button className="bannerButton bg-[gray]/70">More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/> </button>
        </div>
    </div>
  )
}
