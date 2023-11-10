
import {useState,useEffect} from "react"
import {fetchApi} from "../utils/apiConfig"
const useFetchApiData=(url:string)=>{

     const [data, setData]=useState([]);
     const[loading, setLoading]=useState(false);

    useEffect(() => {
      const fetchData=async()=>{
        try {
            setLoading(true);
            const res=await fetchApi(url)
             setData(res.results)
             setLoading(false);
        } catch (error) {
           console.log(error)
           setLoading(false);
        }
      }
      fetchData()

    },[url])

    return {data, loading}
    
}


export default useFetchApiData;