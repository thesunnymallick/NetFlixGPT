import React from 'react'
import { useParams } from 'react-router-dom'
import VideoBackground from '../../components/VideoBackground';


const VideoPlay = () => {
    const { id } = useParams<{ id?: string }>();
    if (id === undefined || isNaN(parseInt(id, 10))) {
        return null;
    }
    return (
        <div>
            <VideoBackground movieId={parseInt(id)} />
        </div>
    )
}

export default VideoPlay