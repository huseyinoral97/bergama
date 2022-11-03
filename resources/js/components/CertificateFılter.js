import React, { useEffect, useState } from 'react';
import '../../css/certificatefilter.scss';
import ModalImage from "react-modal-image";

export const CertificateFılter = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [activeTab, setActiveTab] = useState(1)

    const FilterItem = (catItem) => {
        const selectedItem = data.filter((item) => {
            return item.type === catItem
        })
        setFilteredData(selectedItem);
    }

    useEffect(() => {
        FilterItem('iso')
    }, [])

    const handleClickActiveTab = (currentTab) => {
        setActiveTab(currentTab);
    }

    return (
        <div className='section-padding'>
            <div className='container mt-5'>
                <ul className='sertificate-list_name'>
                    <li className={activeTab === 1 ? "active" : ""} onClick={() => { FilterItem('iso'); handleClickActiveTab(1) }}>
                        ISO
                    </li>
                    <li className={activeTab === 2 ? "active" : ""} onClick={() => { FilterItem('asme'); handleClickActiveTab(2) }}>
                        ASME
                    </li>
                    <li className={activeTab === 3 ? "active" : ""} onClick={() => { FilterItem('en'); handleClickActiveTab(3) }}>
                        EN
                    </li>
                </ul>
                <div className='row'>
                    {filteredData.map((item) => (
                        <div className='col-md-3 p-0'>
                            <div className='filtered-image_container'>
                                <ModalImage
                                    className="filtered-image"
                                    small={item.image}
                                    large={item.image}
                                />;
                                <h4 className='fw-bold' style={{ marginLeft: "10px" }}>{item.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
