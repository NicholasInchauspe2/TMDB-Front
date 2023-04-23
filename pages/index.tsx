import { Header } from '@/components/Header';
import Head from "next/head";
import  Banner  from '@/components/Banner';
import { Props2, movie } from '../types';
import { Row } from '@/components/Row';




const Home = ({netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries}: Props2) => {

  return(
<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">

  <Head>

  </Head>

     <Header/>

  <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
    <Banner netflixOriginals={netflixOriginals}/>
    <section>
      <Row title="Trending Now" movies={trendingNow}/>
      <Row title="topRated" movies={topRated}/>
      <Row title="actionMovies" movies={actionMovies}/>
      <Row title="comedyMovies" movies={comedyMovies}/>  
      <Row title="horrorMovies" movies={horrorMovies}/>
      <Row title="romanceMovies" movies={romanceMovies}/>
      <Row title="documentaries" movies={documentaries}/>
      </section> 
  </main>
</div>
  )
}

export default Home;


export const getServerSideProps = async () => {
 const data =  await fetch("http://localhost:3001/api/movie/all", {method: "GET"}).then((res) => res.json())
if(data?.["0"] && data?.["7"]){
  let netflixOriginals : Array<movie>;
  let trendingNow: Array<movie>;
  let topRated: Array<movie>;
  let actionMovies: Array<movie>;
  let comedyMovies: Array<movie>;
  let horrorMovies: Array<movie>;
  let romanceMovies: Array<movie>;
  let documentaries: Array<movie>;

  netflixOriginals = data?.["0"]
   trendingNow = data?.["1"]
   topRated = data?.["2"]
   actionMovies = data?.["3"]
   comedyMovies = data?.["4"]
   horrorMovies = data?.["5"]
   romanceMovies = data?.["6"]
   documentaries = data?.["7"]

   return { props: { netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries}}
}


}

