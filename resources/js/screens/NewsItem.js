import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import Banner from '/assets/images/banner/news-banner.png';
import AxiosClient from '../utils/AxiosClient';
import i18n from '../utils/i18n';
import { useTranslation } from 'react-i18next';


export const NewsItem = () => {
    const { t } = useTranslation();
    const { slug } = useParams();
    const [data, setData] = useState([]);
    const [lang, setLang] = React.useState(i18n.language);

    useEffect(() => {
        AxiosClient.get('/api/posts/' + slug,
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

    const bread = [
        {
            id: 0,
            title: t('haberler')
        },
        {
            id: 1,
            title: data.title
        },
    ]

    i18n.on("languageChanged", (lng) => {
        setLang(lng);
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='news-item section-padding'>
                <BreadCrumbUI data={bread} />
                <div className='container section-padding'>
                    <div className='news-banner' style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={Banner} width="100%" height="auto" />
                        <h1 style={{ position: "absolute", color: "#FFF" }}>{t('haberlertitle')}</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='pb-4 pt-4'>
                                <h2 className='text-center'>{data.title}</h2>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <img src={data.image} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex align-items-center' style={{ height: "100%" }}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: data.body }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
