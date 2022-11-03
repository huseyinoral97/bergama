import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from '../components/Homepage/Banner';
import { HomeAboutUs } from '../components/Homepage/HomeAboutUs';
import { HomePageProducts } from '../components/Homepage/HomePageProducts';
import { HomePageQuality } from '../components/Homepage/HomePageQuality';
import { HomePageSector } from '../components/Homepage/HomePageSector';

export const HomePage = () => {
    const { t } = useTranslation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Banner />
            <HomeAboutUs />
            <HomePageSector />
            <HomePageProducts name={t('products')} />
            <HomePageQuality />
        </div>
    )
}
