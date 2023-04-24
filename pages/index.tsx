import { Header } from '@/components/Header';
import Head from "next/head";
import  Banner  from '@/components/Banner';
import { Props2, movie } from '../types';
import { Row } from '@/components/Row';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { modalState } from '@/atoms/modalAtom';
import { Modal } from '@/components/Modal';




export const Home = ({netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries}: Props2) => {
 const showModal = useRecoilValue(modalState);

 
  return(
<div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">

  <Head>

  </Head>

     <Header/>

  <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
    <Banner netflixOriginals={netflixOriginals}/>
    <section className='md:space-y-24'>
      <Row title="Trending Now" movies={trendingNow}/>
      <Row title="Top Rated" movies={topRated}/>
      <Row title="Action Movies" movies={actionMovies}/>
      <Row title="Comedy Movies" movies={comedyMovies}/>  
      <Row title="Horror Movies" movies={horrorMovies}/>
      <Row title="Romance Movies" movies={romanceMovies}/>
      <Row title="Documentaries" movies={documentaries}/>
      </section> 
  </main>
   {showModal && <Modal/>} 
</div>
  )
}

export default Home;


export const getServerSideProps = async () => {



  
 const data =  await fetch("http://localhost:3001/api/movie/all", {method: "GET"}).then((res) => res.json())
if(data?.["0"] && data?.["7"]){
 if(data === undefined){
  
 }

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
}else {
  return {
    redirect: {
      destination: '/loading',
      permanent: false,
    },
  };
}


}

