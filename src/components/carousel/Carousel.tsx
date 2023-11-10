import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardList from '../card/CardList';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
interface Movie {
    id: number;
    title: string;
    backdrop_path: string,
    poster_path: string,
    overview: string
}
interface carouselProps {
    movies: Movie[],
    loading: boolean,
};

const PrevArrow = (props: any) => {

    return (
        <button
            onClick={props.onClick}
            className="bg-gray-800 w-10 h-10 rounded-full absolute top-[50%] md:-left-5 -left-2 z-50 flex items-center justify-center shadow-lg">
            <AiOutlineArrowLeft className='text-2xl text-white hover:text-red-500' />
        </button>
    )
}

const NextArrow = (props: any) => {

    return (
        <button
            onClick={props.onClick}
            className="bg-gray-800 w-10 h-10 rounded-full absolute top-[50%] md:-right-4 -right-2 z-50 flex items-center justify-center shadow-lg">
            <AiOutlineArrowRight className='text-2xl text-white hover:text-red-500' />
        </button>
    )
}

const settings = {

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};
const Carousel: React.FC<carouselProps> = ({ movies, loading }) => {
    console.log(process.env.REACT_APP_API_KEY)
    return (
        <Slider {...settings}>
            {
                movies.map((movie) => {

                    return <CardList key={movie.id} movieItem={movie} />
                })
            }
        </Slider>
    )
}

export default Carousel