import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [{
    subject:'Teeth Orthodontics',
    visitingHour: '8:00 AM - 9:00 AM',
    totalSpace: 10
},
{
    subject:'Cosmetic Dentistry',
    visitingHour: '10:05 AM - 11:30 AM',
    totalSpace: 10
},
{
    subject:'Teeth Cleaning',
    visitingHour: '5:00 PM - 6:30 PM',
    totalSpace: 10
},
{
    subject:'Cavity Protection',
    visitingHour: '7:00 PM - 8:30 PM',
    totalSpace: 10
},
{
    subject:'Teeth Orthodontics',
    visitingHour: '8:00 AM - 9:00 AM',
    totalSpace: 10
},
{
    subject:'Teeth Orthodontics',
    visitingHour: '8:00 AM - 9:00 AM',
    totalSpace: 10
}
]

const BookAppointment = ({selectedDate}) => {
    return (
        <section>
            <h2 className='text-brand text-center'>Available Appointments on {selectedDate.toDateString()}</h2>
            <div className='d-flex justify-content-center'>
            <div className='row mt-5 w-75'>
                {
                    bookingData.map(booking => <BookingCard  date={selectedDate} booking={booking}></BookingCard>)
                }
            </div>
            </div>
        </section>
    );
};

export default BookAppointment;