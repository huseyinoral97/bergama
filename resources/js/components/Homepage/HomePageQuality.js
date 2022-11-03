import React from 'react';
import { CarouselUI } from '../CarouselUI';
import '../../../css/carouselui.scss';
import { useTranslation } from 'react-i18next';

export const HomePageQuality = () => {
    const { t } = useTranslation();
    return (
        <div className='homepage-quality'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center mb-5'>
                            <h3 className='fw-bold'>{t('kalitesistemleri')}</h3>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='border-container'>
                            <div className='border' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <CarouselUI />
                    </div>
                </div>
            </div>
        </div>
    )
}
