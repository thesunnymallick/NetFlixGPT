import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

interface ImgProps {
    className: string,
    url: string
}
const Img: React.FC<ImgProps> = ({ className, url }) => {
    return (
        <LazyLoadImage
            className={className}
            src={url}
            effect="blur"
            alt='Image'
        />
    )
}

export default Img