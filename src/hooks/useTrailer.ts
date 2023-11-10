
import {useEffect, useState} from "react"
import axios from "axios"
import { API_OPTIONS } from "../utils/config"
type ItemType = {
  type: string; 
};
interface trailer{
  key:string
}
const useTrailer=(movieId:number)=>{
   const [trailer, setTrailer]=useState<trailer | null>(null)
    useEffect(()=>{
      const getTrailer=async()=>{
       const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        console.log(data)
          const res=data?.results.filter((item:ItemType)=>item?.type==='Trailer')
          const result=res?res[0]:data.results[0]
          setTrailer(result)

      }
      getTrailer()
     
    },[movieId])

    return { trailer}
}

export default useTrailer