import React from 'react'
import { Carousel } from 'react-bootstrap';

export const Caroimg = () => {

     const images = [
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/DigitalCareTransformation.jpg",
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/disrupting-healthcare-practices.jpg",
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/automatic-escalation.jpg",
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/contact-preferences.jpg",
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/kidney-bot.jpg",
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/on-call.jpg",
        "https://kratinmobile.com/css/images/carouselsBanner/banner-backgrounds/truliacare-overview.jpg",
    ];
    return (
        <div>
            <Carousel>
                {images.map((imageUrl, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={imageUrl}
                            alt={`Slide ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    
  )
}
