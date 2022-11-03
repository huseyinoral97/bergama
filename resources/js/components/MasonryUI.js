import React from 'react';
import '../../css/masonry.css';
import CelikYapilar from '/assets/images/products/celik-yapi.png';
import BoruBaglanti from '/assets/images/products/boru-baglanti.png';
import IsiEsanjor from '/assets/images/products/isi-esanjor.png';
import BasincliTanklar from '/assets/images/products/basincli-tanklar.png';
import KabloKanallari from '/assets/images/products/kablo-kanallari.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const MasonryUI = () => {
    const { t } = useTranslation();

    var items = [
        { id: 1, name: t('celik'), image: CelikYapilar, width: "wide1", url: "/urunler/celik-yapilar" },
        { id: 2, name: t('isi'), image: IsiEsanjor, width: "wide", url: "/urunler/isi-esanjorleri" },
        { id: 4, name: t('boru'), image: BoruBaglanti, width: "big", url: "/urunler/boru-baglanti-modulleri" },
        { id: 3, name: t('basinc'), image: BasincliTanklar, width: "small", url: "/urunler/basincli-tanklar" },
        { id: 5, name: t('kablo'), image: KabloKanallari, width: "small-1", url: "/urunler/kablo-kanallari" },
    ];

    return (
        <div className="grid-wrapper" >
            {
                items.map((item => (
                    <Link to={item.url} className={`${item.width}`} style={{ position: "relative" }} key={item.id}>
                        <img className='masonry-image' src={item.image} alt="" onClick={() => window.scrollTo(0, 0)} />
                        <span className='masonry-text' onClick={() => window.scrollTo(0, 0)}>{item.name}</span>
                    </Link>
                )))
            }
        </div>
    )
}
