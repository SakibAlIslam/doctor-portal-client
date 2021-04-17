import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {   
        title: 'Opening Hour',
        icon: faClock,
        description: 'We are open 7 days',
        background: 'primary',
    },
    {   
        title: 'Visit Our Location',
        icon: faMapMarker,
        description: 'Broklyn, NY 10003 USA',
        background: 'dark',
    },
    {   
        title: 'Call Us Now',
        icon: faPhone,
        description: '01799432543',
        background: 'primary',
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map((info) => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;