import Image from "next/image";
import { movie } from "../types"

interface Props {
  netflixOriginals: Array<movie>
}

export default function Banner({netflixOriginals}: Props) {
  return (
    <div>
        <div>
            {/* <Image/> */}
        </div>
    </div>
  )
}
