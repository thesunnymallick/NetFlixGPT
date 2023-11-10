import React from 'react'
import useTrailer from '../hooks/useTrailer';
interface movieIdProps {
    movieId: number; // Adjust the type as needed
}
const VideoBackground: React.FC<movieIdProps> = ({ movieId }) => {
    const { trailer } = useTrailer(movieId)

    return (
        <div className="w-full h-screen aspect-video overflow-hidden ">
            <iframe
                className="w-screen aspect-video h-screen"
                src={
                    "https://www.youtube.com/embed/" +
                    trailer?.key +
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground