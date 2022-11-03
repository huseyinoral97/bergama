import React, { useEffect, useState } from 'react';
import Logo from "/assets/images/logo/logo-white.png";
import LogoDark from "/assets/images/logo/logo-dark.png";
import "../../css/header.scss";
import { HeaderLinkItem } from '../components/HeaderLinkItem';
import i18n from '../utils/i18n';
import { useTranslation } from 'react-i18next';

export const Header = ({ position }) => {
    const { t } = useTranslation();
    const [menu, setMenu] = useState(false);

    const headerList = [
        {
            id: 0,
            title: t('anasayfa'),
            url: "/"
        },
        {
            id: 1,
            title: t('hakkimizda-button'),
            url: "/hakkimizda"
        },
        {
            id: 2,
            title: t('products'),
            url: "/urunler"
        },
        {
            id: 3,
            title: t('kalitesistemleri'),
            url: "/kalite-sistemleri"
        },
        {
            id: 4,
            title: t('haberler'),
            url: "/haberler"
        },
        {
            id: 5,
            title: t('iletisim'),
            url: "/iletisim"
        },
    ]

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 0 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const openMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-transparent pt-4 pb-4 header-section" >
            <div className="container-fluid">
                <button onClick={openMenu} className="navbar-toggler custom-toggler" type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img src={LogoDark} width="100px" height="auto" className='logo-mobile' />
                <div className={menu ? `collapse navbar-collapse justify-content-center show` : `collapse navbar-collapse justify-content-center d-none`} id="navbarNav">
                    <img src={position === "fixed-top" ? Logo : LogoDark} width="100px" height="auto" className='logo' />
                    <ul className="navbar-nav">
                        <HeaderLinkItem data={headerList} openMenu={openMenu} />
                    </ul>
                    <select
                        className='header-language'
                        name="language"
                        onChange={onChange}
                    >
                        <option className='language-option' value="en">EN</option>
                        <option className='language-option' value="tr">TR</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}
