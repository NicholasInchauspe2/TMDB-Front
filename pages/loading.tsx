import { Props, movie } from "@/types"
import requests from "@/utils/request"
import { useRouter } from 'next/router';
import { useEffect } from "react";




export const Login = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, }: Props) => {

  useEffect(() => {
    const saveMoviesOndb = async () => {
      const response = await fetch("https://tmdb-back-yvih.onrender.com/api/movie/length", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify([netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries]), credentials: "include",
      mode: "cors",});
      const data = await response.json();
  
      
        if (!data.error && router) {
          router.replace('/');
        }
      
      }
  
  
    saveMoviesOndb();
  }, [])

    const router = useRouter();
  const saveMoviesOndb = async () => {
    const response = await fetch("https://tmdb-back-yvih.onrender.com/api/movie/length", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify([netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries]), credentials: "include",
    mode: "cors",});
    const data = await response.json();

    
      if (!data.error && router) {
        router.replace('/');
      }
    
    }


  saveMoviesOndb();
  return (
    <div>Loading</div>
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