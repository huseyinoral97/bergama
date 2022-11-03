import React from 'react';
import Logo from "/assets/images/logo/logo-white.png";
import "../../css/footer.scss";
import { FooterLinkItem } from '../components/FooterLinkItem';
import { useTranslation } from 'react-i18next';

const footerLinks = [
    {
        id: 0,
        title: "Hakkımızda",
        children: [
            {
                id: 0,
                title: "Şirket Profili",
                url: "/hakkimizda/sirket-profili"
            },
            {
                id: 1,
                title: "Etik Davranış Kuralları",
                url: "/hakkimizda/etik-davranis-kurallari"
            },
            {
                id: 2,
                title: "Vizyon, Misyon ve Değerler",
                url: "/hakkimizda/vizyon-misyon-ve-degerler"
            },
        ]
    },
    {
        id: 1,
        title: "Faydalı Linkler",
        children: [
            {
                id: 0,
                title: "Haberler",
                url: "/haberler"
            },
            {
                id: 1,
                title: "Kalite Sistemleri",
                url: "/kalite-sistemleri"
            },
            {
                id: 2,
                title: "Ürünler",
                url: "/urunler"
            },
            {
                id: 3,
                title: "İletişim",
                url: "/iletisim"
            },
        ]
    },
]

export const Footer = () => {
    const { t } = useTranslation();
    const footerLinks = [
        {
            id: 0,
            title: t('hakkimizda-button'),
            children: [
                {
                    id: 0,
                    title: t('profil'),
                    url: "/hakkimizda"
                },
                {
                    id: 1,
                    title: t('etik'),
                    url: "/hakkimizda/etik-davranis-kurallari"
                },
            ]
        },
        {
            id: 1,
            title: t('fayda'),
            children: [
                {
                    id: 0,
                    title: t('haberler'),
                    url: "/haberler"
                },
                {
                    id: 1,
                    title: t('kalitesistemleri'),
                    url: "/kalite-sistemleri"
                },
                {
                    id: 2,
                    title: t('products'),
                    url: "/urunler"
                },
                {
                    id: 3,
                    title: t('iletisim'),
                    url: "/iletisim"
                },
            ]
        },
    ]
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='footer-logo'>
                            <div>
                                <img src={Logo} width="120px" height="auto" />
                            </div>
                            <div className='footer-icons'>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <FooterLinkItem data={footerLinks} />
                    <div className='col-md-2'>
                        <ul className='footer-link-item'>
                            <p className='text-white'>
                                {t('fabrika')}
                            </p>
                            <li className="text-white list-unstyled mb-1">
                                Bergama OSB Mahallesi, 3.Cadde,
                                No:1, 35700 Bergama, İzmir
                            </li>
                            <li className="text-white list-unstyled mb-1">
                                <a href='tel:+902122323030'>
                                    {t('tel')}: +90 (212) 232 3030
                                </a>
                            </li>
                            <li className="text-white list-unstyled mb-1">
                                <a href='mailto:info@bergamaindustry.com'>
                                    info@bergamaindustry.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className='footer-link-item'>
                            <p className='text-white'>
                                HQ
                            </p>
                            <li className="text-white list-unstyled mb-1">
                                Ayazağa, Vadistanbul, Azerbaycan Cd. 3B
                                D:1B Blok, 34485 Sarıyer/İstanbul
                            </li>
                            <li className="text-white list-unstyled mb-1">
                                <a href='tel:+902122323030'>
                                    {t('tel')}: +90 (212) 232 3030
                                </a>
                            </li>
                            <li className="text-white list-unstyled mb-1">
                                <a href='mailto:info@bergamaindustry.com'>
                                    info@bergamaindustry.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
