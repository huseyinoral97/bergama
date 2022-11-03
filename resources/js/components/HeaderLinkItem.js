import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderLinkItem = ({ data, openMenu }) => {
    return (
        <>
            {
                data.map((item) => (
                    <li onClick={openMenu} className="nav-item" key={item.id}>
                        <Link className="nav-link" aria-current="page" to={item.url}>{item.title}</Link>
                    </li>
                ))
            }
        </>
    )
}
