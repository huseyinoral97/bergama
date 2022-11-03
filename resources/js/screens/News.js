import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import Banner from '/assets/images/banner/news-banner.png';
import '../../css/news.scss';
import { Link } from 'react-router-dom';
import AxiosClient from '../utils/AxiosClient';
import i18n from '../utils/i18n';
import { useTranslation } from 'react-i18next';

export const News = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [lang, setLang] = React.useState(i18n.language);

    const bread = [
        {
            id: 0,
            title: t('haberler')
        }
    ]

    useEffect(() => {
        AxiosClient.get('/api/posts',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": lang,
                },
            })
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [lang])

    i18n.on("languageChanged", (lng) => {
        setLang(lng);
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='news'>
                <BreadCrumbUI data={bread} />
                <div className='container'>
                    <div className='news-banner'>
                        <img src={Banner} width="100%" height="auto" />
                        <h1 style={{ position: "absolute", color: "#FFF" }}>{t('haberlertitle')}</h1>
                    </div>
                </div>
                <div className='section-padding'>
                    <div className='container'>
                        <div className='row'>
                            {data.map((item) => (
                                <div className='col-md-6' key={item.id}>
                                    <Link to={item.slug}>
                                        <div className='news-item'>
                                            <img src={item.image} width="100%" height="auto" />
                                            <h3 className='fw-bolder mt-4'>{item.title}</h3>
                                            <span>
                                                {item.description}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
