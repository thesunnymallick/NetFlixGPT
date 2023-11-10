import React from 'react';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
// import VideoBackground from '../../components/VideoBackground';
import { useSelector } from 'react-redux'
import Img from '../../components/lazyLoad/Img';
import { FaPlay } from "react-icons/fa"
import { BsInfoCircle } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import Popular from './Popular';
import Trending from './Trending';
import TopRated from './TopRated';
interface Movie {
  id: number;
  title: string;
  backdrop_path: string,
  poster_path: string,
  overview: string
}
interface Image {
  backdrop: string,
  poster: string,
}

type UrlState = {
  url: { imagesUrl: Image }
}
type RootState = {
  movies: { movies: Movie[] },
};
const Browse = () => {
  useNowPlayingMovies()
  const navigate = useNavigate();
  const { movies } = useSelector((state: RootState) => state.movies)
  const { imagesUrl } = useSelector((state: UrlState) => state.url)
  if (movies.length === 0) return null;
  const index = Math.floor(Math.random() * 20)
  const mainMovie = movies[index];

  return (
    <>
      <div className='relative bg-gradient-to-br g-opacity-90 from-black'>
        <div className='w-full bg-gradient-to-br g-opacity-90 from-black   z-30'>
          <Img
            className="hidden md:block  md:aspect-video "
            url={imagesUrl.backdrop + mainMovie?.backdrop_path
            } />
          <Img
            className="block md:hidden md:aspect-video"
            url={imagesUrl.poster + mainMovie?.poster_path
            } />
        </div>

        <div className='absolute h-full flex flex-col justify-center top-[10%] md:-top-[5%] lg:top-0 px-4 md:px-10 z-40'>
          <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl py-2 md:py-5'>{mainMovie?.title}</h1>
          <p className='text-white text-sm lg:text-base md:w-[80%] lg:w-[40%]'>{mainMovie?.overview}</p>
          <div className='mt-5  flex items-center gap-3'>
            <button
              onClick={() => navigate(`/videoPlay/${mainMovie.id}`)}
              className='w-36 h-10 text-lg px-4 font-semibold bg-white rounded-lg shadow-md text-black flex items-center justify-center outline-none border-none gap-2 hover:bg-slate-300 transition-all'>
              <span><FaPlay /> </span>
              <span  > Play</span>
            </button>
            <button
              className='w-36 h-10 text-lg px-4 font-semibold bg-white bg-opacity-80 rounded-lg shadow-md text-black flex items-center justify-center outline-none border-none gap-2 hover:bg-slate-400'
            >
              <span><BsInfoCircle /> </span>
              <span>Info</span>
            </button>
          </div>
        </div>
        <div className=' absolute top-0 -z-0 w-full h-full  md:aspect-video bg-black bg-opacity-80'></div>

      </div>
      <div className='bg-zinc-900  md:pl-10 px-4'>
        <Popular mediaType={"movie"} />
        <Trending />
        <TopRated mediaType={"tv"} />
        <Popular mediaType={"tv"} />
        <TopRated mediaType={"movie"} />
      </div>

    </>
  )

};

export default Browse;
