import React from 'react'
import "../../css/homepagesector.scss";

export const HomePageSectorItem = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <div className={`${item.size} mb-4`} key={item.id}>
                    <div className='homepage-sector_item'>
                        <img src={item.image} width="100%" height="auto" />
                        <div className='homepage-sector_background' />
                        <ul>
                            <h1>{item.title}</h1>
                            {item.children.map((listItem) => (
                                <li key={listItem.id}>
                                    {listItem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}
