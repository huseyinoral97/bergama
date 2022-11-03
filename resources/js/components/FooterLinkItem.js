import React from 'react'
import { Link } from 'react-router-dom'

export const FooterLinkItem = ({ data }) => {
    return (
        <>
            {
                data.map((item) => (
                    <div className='col-md-2' key={item.id}>
                        <ul className='footer-link-item'>
                            <p className='text-white'>
                                {item.title}
                            </p>
                            {
                                item.children.map((child) => (
                                    <li className="text-white list-unstyled mb-1" key={child.title}>
                                        <Link to={child.url} key={child.id}>
                                            {child.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </>
    )
}
