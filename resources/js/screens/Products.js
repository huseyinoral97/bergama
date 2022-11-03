import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import Banner from '/assets/images/banner/products.png';
import '../../css/products.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../utils/i18n';
import AxiosClient from '../utils/AxiosClient';

export const Products = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [lang, setLang] = React.useState(i18n.language);

    const bread = [
        {
            id: 0,
            title: t('products')
        }
    ]

    useEffect(() => {
        AxiosClient.get('/api/products',
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
            <div className='products'>
                <BreadCrumbUI data={bread} />
                <div className='container'>
                    <div className='products-banner'>
                        <img src={Banner} width="100%" height="auto" />
                        <h1>{t('productstitle')}</h1>
                    </div>
                </div>
                <div className='section-padding'>
                    <div className='container'>
                        <div className='row'>
                            {data.map((item) => (
                                <div className='col-md-4 mb-5' key={item.id}>
                                    <div className="products-card">
                                        <Link to={item.slug}>
                                            <img className="products-card-img-top" src={item.cover_photo} alt="Card image cap" width="100%" onClick={() => window.scrollTo(0, 0)} />
                                        </Link>
                                        <div className="products-card-body">
                                            <h5 className="products-card-title">{item.name}</h5>
                                            <p className="products-card-text">
                                                {item.exp}
                                            </p>
                                            <Link to={item.slug} className="btn btn-primary">
                                                <span onClick={() => window.scrollTo(0, 0)}>
                                                    {t('incele')}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
