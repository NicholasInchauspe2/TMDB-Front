import { Header } from '@/components/Header';
import Head from "next/head";
import  Banner  from '@/components/Banner';
import { Props, movie } from '../types';




const Home = ({netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries}: Props) => {

  return(
<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">

  <Head>

  </Head>

     <Header/>

  <main>
    <Banner netflixOriginals={netflixOriginals}/>
    <section>
      {/* Row */}
      {/* Row */}
      {/* Row */}
      {/* Row */}
      {/* Row */}
      {/* Row */}
      {/* Row */}      
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

