import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import whitening from '../../../images/tooth.png';
import ServiceDetail from './ServiceDetail';

const serviceData = [
    {
        title:'Fluoride Treatment',
        img:fluoride,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!'
    },
    {
        title:'Cavity Filing',
        img:cavity,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!'
    },
    {
        title:'Teeth Whitening',
        img:whitening,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ratione quos est asperiores!'
    }
]

const Services = () => {
    return (
        <section>
            <div className='text-center'>
            <h5 style={{color:'#18D2B1'}}>Our Services</h5>
            <h2 style={{color:'#3a4256'}}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75'>
                    {
                        serviceData.map(serviceInfo => <ServiceDetail serviceInfo={serviceInfo}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;