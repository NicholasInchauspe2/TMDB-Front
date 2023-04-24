import { Props, movie } from "@/types"
import requests from "@/utils/request"
import { useRouter } from 'next/router';




export const Login = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, }: Props) => {

  const saveMoviesOndb = async () => {
    const router = useRouter();

    const response = await fetch("http://localhost:3001/api/movie/length", {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify([netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries])});
    const data = await response.json();

    console.log(data.error);
    
    if (!data.error) {
      console.log("entra aca");
      
      if (!data.error) {
        router.replace('/');
      }
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