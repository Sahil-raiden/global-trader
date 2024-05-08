import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
const Home = () => {

    return (
        <div className="container-fluid">
            <div className='row row-cols-1 row-cols-md-2'>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong rounded-5" style={{ marginBottom: '10px' }} >

                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                    </a>
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon icon={faInfoCircle} size="2x" /><h3>Promotion Events</h3>
                        <p className='justify'>
                            Stand out from the competition with our innovative promotion and in-shop branding solutions. From eye-catching displays to interactive experiences, we help you create immersive brand experiences that resonate with your audience and drive sales.

                        </p>
                    </div>
                </div>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong rounded-5" style={{ marginBottom: '10px' }} >

                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                    </a>
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon icon={faUser} size="2x" /><h3>Shop Opening & Branding</h3>
                        <p className='justify'>
                            Make a memorable impact with our tailored shop opening services. From concept development to execution, we create unforgettable launch events that drive foot traffic, generate buzz, and leave a lasting impression on your customers.
                        </p>
                    </div>
                </div>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong rounded-5" style={{ marginBottom: '10px' }}>

                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                    </a>
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon icon={faLightbulb} size="2x" /><h3>Cantervan indoor / outdoor</h3>
                        <p className='justify'>
                            Capture attention and reach your target audience with our dynamic outdoor cantervan campaigns. Whether it's a product launch, awareness drive, or promotional event, our mobile marketing solutions deliver your message effectively to the masses.

                        </p>
                    </div>
                </div>
                <div className="service-box bg-image hover-overlay hover-zoom shadow-1-strong rounded-5" style={{ marginBottom: '10px' }}>
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
                    </a>
                    <div className="service-infoab text-center">
                        <FontAwesomeIcon icon={faUserGroup} size="2x" /><h3>Manpower</h3>
                        <p className='justify'>
                            Our experienced team ensures that your event runs smoothly by providing skilled and reliable manpower. From event setup to guest assistance, we handle all staffing requirements with professionalism and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
