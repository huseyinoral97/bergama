import React, { useEffect, useState } from 'react';
import "../../../css/banner.scss";
import AxiosClient from '../../utils/AxiosClient';
import i18n from '../../utils/i18n';

export const Banner = () => {
    const [data, setData] = useState([]);
    const [lang, setLang] = React.useState(i18n.language);

    useEffect(() => {
        AxiosClient.get('/api/slider',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": lang,
                },
            })
            .then((response) => {
                setData(response.data[0]);
            }).catch((error) => {
                console.log(error)
            })
    }, [lang])

    i18n.on("languageChanged", (lng) => {
        setLang(lng);
    });

    return (
        <div className='homepage-banner'>
            <div className='homepage-banner_background' />
            <img src={data.image} />
            <h1>{data.title}</h1>
        </div>
    )
}
