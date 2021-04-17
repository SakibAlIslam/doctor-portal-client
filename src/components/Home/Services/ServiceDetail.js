import React from 'react';

const ServiceDetail = ({serviceInfo}) => {
    return (
        <div className='col-md-4 text-center mt-5 p-3'>
            <img style={{height: '50px'}} src={serviceInfo.img} alt="img"/>
            <h5 className='mt-3 mb-3'>{serviceInfo.title}</h5>
            <p className='text-secondary'>{serviceInfo.description}</p>
        </div>
    );
};

export default ServiceDetail;