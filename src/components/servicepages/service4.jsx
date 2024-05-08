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
import t1 from '../../assets/Service-4/1.jpg';
import t2 from '../../assets/Service-4/2.jpg';
import t3 from '../../assets/Service-4/3.jpeg';
import t4 from '../../assets/Service-4/4.jpg';
import t5 from '../../assets/Service-4/5.jpeg';
import t6 from '../../assets/Service-4/6.jpeg';
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
      <h2>Manpower</h2>
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
              <h3>Event Staffing</h3>
              <p className='justify'>
              Providing trained personnel for various roles such as event coordinators, ushers, registration assistants, and security personnel. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Hospitality Staffing</h3>
              <p className='justify'>
              Offering skilled staff for catering, bartending, and hospitality services to ensure excellent guest experiences. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Technical Support</h3>
              <p className='justify'>
              Supplying technicians and AV specialists for setting up and managing audio-visual equipment, lighting, and technical aspects of the event. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Brand Ambassadors</h3>
              <p className='justify'>
              Deploying brand representatives and product demonstrators to engage with attendees and promote products/services. 
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
              Providing personnel fluent in multiple languages to cater to diverse audiences and facilitate effective communication. 
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
              Offering experienced event managers to oversee all aspects of event execution, ensuring smooth operations and timely resolution of any issues. 
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
