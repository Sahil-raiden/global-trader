import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t7 from '../../assets/Past-Events/pe19.jpeg';
import t8 from '../../assets/Past-Events/pe20.jpeg';
import t9 from '../../assets/Past-Events/pe21.jpeg';
import t10 from '../../assets/Past-Events/pe22.jpeg';
import t11 from '../../assets/Past-Events/pe23.jpeg';
import t12 from '../../assets/Past-Events/pe24.jpeg';
import t1 from '../../assets/Service-7/1.jpeg';
import t2 from '../../assets/Service-7/2.jpeg';
import t3 from '../../assets/Service-7/3.png';
import t4 from '../../assets/Service-7/4.png';
import t5 from '../../assets/Service-7/5.jpeg';
import t6 from '../../assets/Service-7/6.png';
import './service1.css'
import { useNavigate } from 'react-router-dom';

function Services() {
  let navigate = useNavigate()
  const [showDetails, setShowDetails] = useState([true, true, true, true, true]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <div className="services">
      <Slider {...settings}>
      <div>
          <img src={t1} alt="Service 1" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={t2} alt="Service 2" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={t3} alt="Service 3" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={t4} alt="Service 4" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={t5} alt="Service 4" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={t6} alt="Service 4" style={{ height: '60vmin' }} />
        </div>
      </Slider>
      <br />
      <button className='primary-button mx-auto d-block' onClick={() => navigate('/global-trader/contact')}>Get This Service</button>
      <br />
      <br />
      <h2>Corporate activity</h2>
      <br />
      <br />
      <div className="about-us-container">
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Event Planners</h3>
              <p className='justify'>
              Providing skilled professionals to conceptualize, plan, and execute corporate activities tailored to the specific goals and objectives of the organization.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Facilitators and Trainers</h3>
              <p className='justify'>
              Offering experienced facilitators and trainers to lead workshops, seminars, team-building exercises, and other interactive activities designed to enhance employee skills and foster a positive corporate culture.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Administrative Support</h3>
              <p className='justify'>
              Supplying administrative personnel to handle registration, attendee management, scheduling, and other logistical tasks necessary for the smooth operation of corporate activities.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Technical Support</h3>
              <p className='justify'>
              Deploying technicians and IT specialists to set up and manage audio-visual equipment, presentation tools, and other technical aspects of corporate activities, ensuring seamless execution without technical glitches.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Multilingual Staff</h3>
              <p className='justify'>
              Offering personnel fluent in multiple languages to accommodate the diverse linguistic needs of employees and guests attending corporate activities, facilitating clear communication and engagement.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>On-site Management</h3>
              <p className='justify'>
              Supplying experienced managers to oversee all aspects of corporate activities, including logistics, scheduling, and participant satisfaction, ensuring that objectives are met and any issues are promptly addressed.
              </p>
            </div>
          </div>
        </div>
        <h1 className="display-1 text-primary col text-center">Our Past Activities</h1>
        <Slider {...settings}>
          <div>
            <img src={t7} alt="Service 7" style={{ height: '60vmin' }} />
          </div>
          <div>
            <img src={t8} alt="Service 8" style={{ height: '60vmin' }} />
          </div>
          <div>
            <img src={t9} alt="Service 9" style={{ height: '60vmin' }} />
          </div>
          <div>
            <img src={t10} alt="Service 10" style={{ height: '60vmin' }} />
          </div>
          <div>
            <img src={t11} alt="Service 11" style={{ height: '60vmin' }} />
          </div>
          <div>
            <img src={t12} alt="Service 12" style={{ height: '60vmin' }} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Services;
