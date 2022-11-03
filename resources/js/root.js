import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import "../css/_base.scss";
import { Footer } from './layout/Footer';
import { Contact } from './screens/Contact';
import { AboutUs } from './screens/AboutUs';
import { News } from './screens/News';
import { NewsItem } from './screens/NewsItem';
import { Products } from './screens/Products';
import { ProductsItem } from './screens/ProductsItem';
import { QualitySystems } from './screens/QualitySystems';
import './utils/i18n';
import { Page } from './screens/Page';
import { Header } from './layout/Header';

function Root() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/hakkimizda' element={<AboutUs />} />
                <Route path='/hakkimizda/:slug' element={<Page />} />
                <Route path='/urunler' element={<Products />} />
                <Route path='/urunler/:slug' element={<ProductsItem />} />
                <Route path='/haberler' element={<News />} />
                <Route path='/haberler/:slug' element={<NewsItem />} />
                <Route path='/kalite-sistemleri' element={<QualitySystems />} />
                <Route path='/iletisim' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Root;

// DOM element
if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}