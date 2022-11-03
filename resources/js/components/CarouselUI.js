import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import '../../css/carouselui.scss';
import AxiosClient from '../utils/AxiosClient';

export const CarouselUI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AxiosClient.get('/api/certificates')
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoPlay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className='carouselui'>
            {data.map((item) => {
                if (item.type === 'quality') {
                    return (
                        <div className='carouselui-item' key={item.image}>
                            <img src={item.image} />
                        </div>
                    )
                }
            })}
        </Slider>
    )
}
