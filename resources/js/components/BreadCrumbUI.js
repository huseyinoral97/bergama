import React from 'react'
import { useTranslation } from 'react-i18next';

export const BreadCrumbUI = ({ data }) => {
    const { t } = useTranslation();

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <li className="breadcrumb-item" aria-current="page">{t('anasayfa')}</li>
                    {data.map((item) => (
                        <li key={item.id} className="breadcrumb-item" aria-current="page">{item.title}</li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}
