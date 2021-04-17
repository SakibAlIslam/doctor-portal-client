import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';


const Appointment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader></AppointmentHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;