import React, { useLayoutEffect } from 'react';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import '../../css/aboutus.scss';
import { HomeAboutUs } from '../components/Homepage/HomeAboutUs';
import Banner from '/assets/images/banner/aboutus.png';
import Map from '/assets/images/aboutus/aboutus-map.png';
import FirstImage from "/assets/images/homepage/hakkimizda-1.png";
import SecondImage from "/assets/images/homepage/hakkimizda-2.png";
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
    const { t } = useTranslation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const bread = [
        {
            id: 0,
            title: t('hakkimizda-button')
        }
    ]

    return (
        <>
            <div className='aboutus'>
                <BreadCrumbUI data={bread} />
                <div className='container'>
                    <div className='aboutus-banner'>
                        <ReactPlayer
                            controls={true}
                            light={Banner}
                            width='100%'
                            height='500px'
                            url='/assets/videos/introduce.mp4'
                        />
                    </div>
                </div>
                <HomeAboutUs display="d-none" />
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <img src={Map} width="628" height="auto" />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='d-flex align-items-center' style={{ height: "100%" }}>
                                    <div className='homepage-about_text'>
                                        <div>
                                            <ul className='list-unstyled'>
                                                <li className='mb-2'>{t('li1')}</li>
                                                <li className='mb-2'>{t('li2')}</li>
                                                <li className='mb-2'>{t('li3')}</li>
                                                <li className='mb-2'>{t('li4')}</li>
                                                <li className='mb-2'>{t('li5')}</li>
                                                <li className='mb-2'>{t('li6')}</li>
                                            </ul>
                                            <p style={{ lineHeight: "17.5pt" }}>
                                                {t('lisub')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='d-flex align-items-center about-padding' style={{ height: "100%" }}>
                                    <div className='homepage-about_text'>
                                        <div>
                                            <p>
                                                {t('hakkimizda3')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='about-padding'>
                                    <div className='homepage-about_images'>
                                        <img src={FirstImage} />
                                        <img src={SecondImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className='aboutus-blue-line'>
                        <div className='aboutus-blue-line_content'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='blue-line_text'>
                                            <h3>
                                                {t("ceo")}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='userpic-container'>
                                            <div className='userpic-inner'>
                                                <img src={User} width="100%" height="auto" />
                                                <h4>Ad Soyad</h4>
                                                <span>CEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    **/}
                </div>
            </div>
        </>
    )
}
