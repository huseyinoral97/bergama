import React, { useLayoutEffect } from 'react';
import * as Yup from 'yup';
import { BreadCrumbUI } from '../components/BreadCrumbUI';
import ContactBanner from '/assets/images/banner/contact-banner.png';
import "../../css/contact.scss";
import { Formik, Form, Field } from 'formik';
import { Header } from '../layout/Header';
import { useTranslation } from 'react-i18next';
import AxiosClient from '../utils/AxiosClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});

export const Contact = () => {
    const { t } = useTranslation();

    const notify = () =>
        toast.success("Formunuz başarıyla gönderilmiştir!", {
            position: toast.POSITION.TOP_RIGHT
        });
    const unsuccessful = () =>
        toast.error("Bir hata oluştu!", {
            position: toast.POSITION.TOP_RIGHT
        });

    const sendForm = (value) => {
        AxiosClient
            .post("api/contact", value)
            .then(function (response) {
                notify();
            })
            .catch((error) => {
                console.log(error)
                unsuccessful();
            })
    }

    const bread = [
        {
            id: 0,
            title: t('iletisim')
        }
    ]

    return (
        <>
            <div className='contact-container'>
                <BreadCrumbUI data={bread} />
                <div className='contact-banner'>
                    <img src={ContactBanner} width="100%" height="auto" />
                    <h1>{t('iletisim')}</h1>
                </div>
                <ToastContainer />
                <div className='contact-inner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <div>
                                        <h3 className='fw-bolder'>{t('iletisim')}</h3>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            email: '',
                                            message: '',
                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={(values, { resetForm }) => {
                                            // same shape as initial values
                                            sendForm(values);
                                            resetForm();
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className='formik-form'>

                                                <label htmlFor="name">{t('formad')}</label>
                                                <Field name="name" />
                                                {errors.name && touched.name ? (
                                                    <div>{errors.name}</div>
                                                ) : null}

                                                <label htmlFor="email">{t('formmail')}</label>
                                                <Field name="email" type="email" />
                                                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                                                <label htmlFor="message">{t('formmesaj')}</label>
                                                <Field name="message" component="textarea" />
                                                {errors.message && touched.message ? <div>{errors.message}</div> : null}

                                                <button className='mt-4' type="submit">{t('formbuton')}</button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='contact-adress-container'>
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.1262844480007!2d27.047749415664125!3d39.08082114371583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963e6eb4445c3%3A0xc6790bae461ae12b!2sBergama%20End%C3%BCstri%20%C3%9Cr%C3%BCnleri%20Sanayi%20ve%20Ticaret%20A.%C5%9E.%20Bergama%20%C5%9Eubesi!5e0!3m2!1str!2str!4v1666252651640!5m2!1str!2str" width="100%" height="350" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <div className='mt-3'>
                                        <ul className='contact-adress'>
                                            <h3 className='fw-bolder'>{t('fabrika')}</h3>
                                            <li>Bergama OSB Mahallesi, 3.Cadde, No:1, 35700 Bergama, İzmir</li>
                                            <li>
                                                <a href='tel:+902122323030'>
                                                    T: +90 (212) 232 3030 | F: +90 (212) 232 7282
                                                </a>
                                            </li>
                                            <li>
                                                <a href='mailto:info@bergamaindustry.com'>
                                                    info@bergamaindustry.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='contact-adress-container'>
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.1262844480007!2d27.047749415664125!3d39.08082114371583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963e6eb4445c3%3A0xc6790bae461ae12b!2sBergama%20End%C3%BCstri%20%C3%9Cr%C3%BCnleri%20Sanayi%20ve%20Ticaret%20A.%C5%9E.%20Bergama%20%C5%9Eubesi!5e0!3m2!1str!2str!4v1666252651640!5m2!1str!2str" width="100%" height="350" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <div className='mt-3'>
                                        <ul className='contact-adress'>
                                            <h3 className='fw-bolder'>{t("merkez")}</h3>
                                            <li>Ayazağa, Vadistanbul, Azerbaycan Cd. 3B D:1B Blok, 34485 Sarıyer/İstanbul</li>
                                            <li>
                                                <a href='tel:+902122323030'>
                                                    T: +90 (212) 232 3030 | F: +90 (212) 232 7282
                                                </a>
                                            </li>
                                            <li>
                                                <a href='mailto:info@bergamaindustry.com'>
                                                    info@bergamaindustry.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
