import React from 'react'
import Img from '../lazyLoad/Img'
import { useSelector } from 'react-redux'
interface movie {
    title: string,
    backdrop_path: string,
    poster_path: string,
}
interface movieProps {
    movieItem: movie
}
interface Image {
    backdrop: string,
    poster: string,
}
type UrlState = {
    url: { imagesUrl: Image }
}
const CardList: React.FC<movieProps> = ({ movieItem }) => {
    const { imagesUrl } = useSelector((state: UrlState) => state.url)
    return (
        <div>
            <Img className="w-[160px] md:w-[145px] rounded-md"
                url={imagesUrl.poster + movieItem.poster_path} />

        </div>
    )
}

export default CardList