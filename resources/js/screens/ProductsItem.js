import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import { HomePageProducts } from '../components/Homepage/HomePageProducts';
import Banner from '/assets/images/banner/celikyapi.png';
import AxiosClient from '../utils/AxiosClient';
import i18n from '../utils/i18n';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import '../../css/productsitem.scss';

export const ProductsItem = () => {
    const [lang, setLang] = React.useState(i18n.language);
    const [data, setData] = useState([]);
    const [photos, setPhotos] = useState([]);
    const { slug } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        AxiosClient.get('/api/products/' + slug,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": lang,
                },
            })
            .then((response) => {
                setData(response.data);
                setPhotos(response.data.photos)
            }).catch((error) => {
                console.log(error)
            })
    }, [lang, slug])


    i18n.on("languageChanged", (lng) => {
        setLang(lng);
    });

    const bread = [
        {
            id: 0,
            title: t('products')
        },
        {
            id: 1,
            title: data.name
        },
    ]

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoPlay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='products-item'>
                <BreadCrumbUI data={bread} />
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mb-5'>
                            <h1 className='fw-bold text-center'>{data.name}</h1>
                        </div>
                        <div className='col-12 mb-4'>
                            <img src={Banner} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
                <div className='product-detail'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 mb-4'>
                                <p className='fw-bold'>
                                    {data.exp}
                                </p>
                            </div>
                            <div className='col-12 mb-4'>
                                <div
                                    dangerouslySetInnerHTML={{ __html: data.description }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <Slider {...settings} className='carouselui'>
                        {photos.map((item) => {
                            return (
                                <div className='carouselui-item'>
                                    <img src={item} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <HomePageProducts name={t('otherproducts')} />
            </div>
        </>
    )
}
