import React from 'react';
import '../../../css/homepageproducts.scss';
import { MasonryUI } from '../MasonryUI';

export const HomePageProducts = ({ name }) => {
    return (
        <div className='homepage-products'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center mb-5'>
                            <h3 className='fw-bolder'>{name}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <MasonryUI />
            </div>
        </div>
    )
}
