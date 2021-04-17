import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-4 offset-md-1">

                <h1 style={{color:'#3a4256'}}>Your New Smile <br/> Starts Here</h1>

                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ad dolore consequuntur ea adipisci corporis?</p>

                <button style={{backgroundImage: 'linear-gradient(to right, #18D2B1 , #0FCFEB)', fontWeight:'600',cursor: 'pointer'}} className="btn btn-default text-white">Get Appointment</button>
            </div>

            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt="chair"/>
            </div>
        </main>
    );
};

export default HeaderMain;