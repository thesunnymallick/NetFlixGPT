import React from 'react'
import useFetchApiData from '../../hooks/useFetchApiData'
import Carousel from '../../components/carousel/Carousel'

type popularPros = {
    mediaType: string
}
const Popular: React.FC<popularPros> = ({ mediaType }) => {
    const { data, loading } = useFetchApiData(`/${mediaType}/popular`)

    return data && (
        <div className={`container relative mt-0 ${mediaType === "tv" ? "" : "md:-mt-28"} pb-10`}>
            <div className='py-5'>
                <h2 className='text-white text-2xl font-semibold'>Popular {mediaType === "movie" ? "Movies" : "Tv Serise"}</h2>
            </div>
            <Carousel movies={data} loading={loading} />

        </div>
    )
}

export default Popular