import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import '../../css/products.scss';
import { useTranslation } from 'react-i18next';
import AxiosClient from '../utils/AxiosClient';
import i18n from '../utils/i18n';
import { useParams } from 'react-router-dom';

export const Page = () => {
    const { t } = useTranslation();
    const [lang, setLang] = React.useState(i18n.language);
    const [data, setData] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        AxiosClient.get('/api/page/' + slug,
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

    const bread = [
        {
            id: 0,
            title: data.title
        }
    ]

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='aboutus'>
                <BreadCrumbUI data={bread} />
                <div className='container products'>
                    <div className='products-banner'>
                        <img src={data.image} width="100%" height="auto" />
                        <h1>{data.title}</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='section-padding'>
                                <div dangerouslySetInnerHTML={{ __html: data.body }} />
                                <a href="/assets/document/etik-kod.pdf" target="_blank" className='fw-bold'>
                                    {t('etikkod')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
