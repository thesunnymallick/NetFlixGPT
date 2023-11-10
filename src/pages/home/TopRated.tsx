import React from 'react'
import useFetchApiData from '../../hooks/useFetchApiData'
import Carousel from '../../components/carousel/Carousel'
type popularPros = {
    mediaType: string
}

const TopRated: React.FC<popularPros> = ({ mediaType }) => {
    const { data, loading } = useFetchApiData(`/${mediaType}/top_rated`)

    return data && (
        <div className="container relative -mt-5  pb-0">
            <div className='py-5'>
                <h2 className='text-white text-2xl font-semibold'>Top Rated {mediaType === "movie" ? "Movies" : "Tv Serise"}</h2>
            </div>
            <Carousel movies={data} loading={loading} />

        </div>
    )
}

export default TopRated