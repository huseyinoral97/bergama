import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "../../../css/homepageabout.scss";
import FirstImage from "/assets/images/homepage/hakkimizda-1.png";
import SecondImage from "/assets/images/homepage/hakkimizda-2.png";

export const HomeAboutUs = ({ display }) => {
    const { t } = useTranslation();

    return (
        <div className='homepage-about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='homepage-about_images'>
                            <img src={FirstImage} />
                            <img src={SecondImage} />
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='d-flex align-items-center' style={{ height: "100%" }}>
                            <div className='homepage-about_text'>
                                <div>
                                    <h1 className='mb-4'>{t('title')}</h1>
                                    <p>{t('hakkimizda')}</p>
                                </div>
                                <div className={`bergama-button ${display}`}>
                                    <Link to="/hakkimizda">{t('hakkimizda-button')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
