import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import Banner from '/assets/images/banner/quality-systems.png';
import '../../css/qualitysystem.scss';
import { CertificateFılter } from '../components/CertificateFılter';
import { useTranslation } from 'react-i18next';
import AxiosClient from '../utils/AxiosClient';

export const QualitySystems = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const bread = [
        {
            id: 0,
            title: t('kalitesistemleri')
        }
    ]

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        !loading && <>
            <BreadCrumbUI data={bread} />
            <div className='container'>
                <div className='quality-banner'>
                    <img src={Banner} width="100%" height="auto" />
                    <h1 style={{ position: "absolute", color: "#FFF" }}>{t('kalitesistemlerititle')}</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mt-4'>
                        <h3 className='fw-bold'>{t('kalitesistemleri')}</h3>
                    </div>
                    <div className='col-md-12'>
                        <p>
                            {t('kalitesistemleriaciklama')}
                        </p>
                    </div>
                    {data.map((item) => {
                        if (item.type === "quality") {
                            return <div className='col-md-3 sertificate-item_container mb-4'>
                                <div className='sertificate-item'>
                                    <img src={item.image} />
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>
            <CertificateFılter data={data} />
        </>
    )
}
