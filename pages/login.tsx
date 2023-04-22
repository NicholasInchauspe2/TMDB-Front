import { Movie } from "@/typings"
import requests from "@/utils/request"
import { useState } from "react"


interface Props {
  netflixOriginals: movie[]
  trendingNow: movie[]
  topRated: movie[]
  actionMovies: movie[]
  comedyMovies: movie[]
  horrorMovies: movie[]
  romanceMovies: movie[]
  documentaries: movie[]
} 


interface movie {
  title: string;
/*   genresList: Array<string>; */
  overview: string;
  vote_average: number;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
}

export const Login = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, }: Props) => {


  const [dbLength, setdbLength] = useState(1); 

  const saveMoviesOndb = async () => {

    const response = await fetch("http://localhost:3001/api/movie/length", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify([netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries])});
    const data = await response.json();
    console.log(data)
    
   /*  if(!data.error){ setdbLength(data.length)}
    if(!dbLength){
      const response = await fetch("http://localhost:3001/api/movie/add", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(netflixOriginals)});
      const data = await response.json();
      console.log("CUANTAS VECES SE EJECUTA", data, dbLength);
      setdbLength(dbLength + netflixOriginals.length);
    } 
    console.log(dbLength)
    if(dbLength > 1){
          await fetch("http://localhost:3001/api/movie/lastOne", {method: "GET"})
    } */
    }


  saveMoviesOndb();
  return (
    <div>Login</div>
  )
}

export default Login

export const getServerSideProps = async () => {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ])



    console.log("CONSOLE LOG",netflixOriginals);
    return{
      props: {
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,
      }
    }
  }