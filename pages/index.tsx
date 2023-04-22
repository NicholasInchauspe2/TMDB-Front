import { Header } from '@/components/Header';
import type { NextPage } from 'next'
import Head from "next/head";
import { Banner } from '@/components/Banner';
import requests from '@/utils/request';
import { Movie } from '@/typings';
import { useState } from 'react';
import { movie } from './login';

interface Props {
  data: Movie[]
}

/* interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
} */

const Home = (/* {
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, }: Props */ {data}: Props) => {

   /*  console.log("ALGO", data); */




  return(
<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">

  <Head>

  </Head>

     <Header/>

  <main>
    <Banner/>
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
 const response =  await fetch("http://localhost:3001/api/movie/all", {method: "GET"})

/*   const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
 } =  */ const data : Record<string, movie[]> | null  = await response.json();
 if(!data?.["0"]){
  const netflixOriginals : Array<movie>  = data?.["0"]
 }

 

  

return { props: { data }}

/*   return{
    props: {
      netflixOriginals: netflixOriginals,
      trendingNow: trendingNow,
      topRated: topRated,
      actionMovies: actionMovies,
      comedyMovies: comedyMovies,
      horrorMovies: horrorMovies,
      romanceMovies: romanceMovies,
      documentaries: documentaries,
    }
  } */
}

