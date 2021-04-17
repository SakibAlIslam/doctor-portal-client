import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css';

const AppointmentHeader = ({handleDateChange}) => {


    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center w-100 appointment-header-container">
            <div className="col-md-5 offset-md-1">
                <h1 style={{ color: '#3a4256' }} >Appointment</h1>
                <Calendar
                    className='calender mt-5'
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-5">
                <img src={chair} className="img-fluid" alt="chair" />
            </div>
        </main>
    );
};

export default AppointmentHeader;