import {useEffect} from "react"
import axios from "axios"
import { API_OPTIONS } from "../utils/config"
import { useDispatch } from "react-redux"
import { nowPlayingMovies } from "../features/moviesSlice"
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    useEffect(() => {
       const fetchMovies=async()=>{
       const {data}=await axios.get('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
       
       dispatch(nowPlayingMovies(data?.results))
       }
       fetchMovies();
    }, [dispatch])
    
}
export default useNowPlayingMovies