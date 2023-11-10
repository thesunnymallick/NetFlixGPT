import React from 'react'
import useFetchApiData from '../../hooks/useFetchApiData'
import Carousel from '../../components/carousel/Carousel'

const Trending = () => {
    const { data, loading } = useFetchApiData("/trending/all/day")

    return data && (
        <div className="container relative -mt-10  pb-0">
            <div className='py-5'>
                <h2 className='text-white text-2xl font-semibold'>Trending Movies</h2>
            </div>
            <Carousel movies={data} loading={loading} />

        </div>
    )
}

export default Trending