import { Header } from '@/components/Header';
import type { NextPage } from 'next'
import Head from "next/head";
import { Banner } from '@/components/Banner';
import requests from '@/utils/request';
import { Movie } from '@/typings';
import { useState } from 'react';

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

    console.log("ALGO", data);




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


const getServerSideProps = async () => {
 const response =  await fetch("http://localhost:3001/api/movie/all", {method: "GET"})
 console.log("res",response)

/*   const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
 } =  */ const data = await response.json();
 console.log(data,"ALL MOVIES")
  

return {
  props: {data}}

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

