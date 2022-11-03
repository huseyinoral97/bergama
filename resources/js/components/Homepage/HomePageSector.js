import React from 'react';
import { HomePageSectorItem } from '../HomePageSectorItem';
import Oil from "/assets/images/sectors/oil.png";
import Petrochemical from "/assets/images/sectors/petrochemical.png";
import Water from "/assets/images/sectors/water.png";
import PowerPlants from "/assets/images/sectors/power-plants.png";
import "../../../css/homepagesector.scss";
import { useTranslation } from 'react-i18next';

export const HomePageSector = () => {
    const { t } = useTranslation();
    const data = [
        {
            id: 3,
            title: t('watertreatment'),
            size: "col-md-3 col-sm-12",
            with: 688,
            image: Water,
            children: [
                {
                    id: 0,
                    title: t('water1'),
                },
                {
                    id: 1,
                    title: t('water2'),
                },
                {
                    id: 2,
                    title: t('water3'),
                },
            ]
        },
        {
            id: 2,
            title: t('powerplant'),
            size: "col-md-9 col-sm-12",
            image: PowerPlants,
            width: 1426,
            children: [
                {
                    id: 0,
                    title: t('combined')
                },
                {
                    id: 1,
                    title: t('nukleer')
                },
                {
                    id: 2,
                    title: t('hidro')
                },
                {
                    id: 3,
                    title: t('coal')
                },
                {
                    id: 4,
                    title: t('wind')
                }
            ]
        },
        {
            id: 0,
            title: t('oil'),
            size: "col-md-6 col-sm-12",
            image: Oil,
            width: 966,
            children: [
                {
                    id: 0,
                    title: t('rafi')
                },
                {
                    id: 1,
                    title: t('lng')
                },
                {
                    id: 2,
                    title: t('gas')
                }
            ]
        },
        {
            id: 1,
            title: t('petro'),
            size: "col-md-6 col-sm-12",
            image: Petrochemical,
            width: 698,
            children: [
                {
                    id: 0,
                    title: t('ammo')
                },
                {
                    id: 1,
                    title: t('olefin')
                },
                {
                    id: 2,
                    title: t('aromatic')
                }
            ]
        },
    ]
    return (
        <div className='container-fluid homepage-sector'>
            <div className='row'>
                <HomePageSectorItem data={data} />
            </div>
        </div >
    )
}
