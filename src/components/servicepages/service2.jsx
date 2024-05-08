import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t7 from '../../assets/Past-Events/pe7.jpeg';
import t8 from '../../assets/Past-Events/pe8.jpeg';
import t9 from '../../assets/Past-Events/pe9.jpeg';
import t10 from '../../assets/Past-Events/pe10.jpeg';
import t11 from '../../assets/Past-Events/pe11.jpeg';
import t12 from '../../assets/Past-Events/pe12.jpeg';
import t1 from '../../assets/Service-2/1.png';
import t2 from '../../assets/Service-2/2.png';
import t3 from '../../assets/Service-2/3.png';
import t4 from '../../assets/Service-2/4.png';
import t5 from '../../assets/Service-2/5.png';
import t6 from '../../assets/Service-2/6.png';
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
      <h2>Shop Opening & Branding</h2>
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
              <h3>Grand Opening Planning</h3>
              <p className='justify'>
              Assisting in planning the grand opening event, including timeline development, logistics coordination, and budget management. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Venue Selection and Setup</h3>
              <p className='justify'>
              Helping in selecting a suitable venue for the shop opening and managing the setup process, including interior decoration and layout design. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>VIP and Guest Management</h3>
              <p className='justify'>
              Coordinating invitations, RSVPs, and special arrangements for VIP guests attending the shop opening event. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Ribbon Cutting Ceremony</h3>
              <p className='justify'>
              Organizing and executing ceremonial events such as ribbon-cutting ceremonies and speeches to mark the official opening of the shop. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Promotional Giveaways</h3>
              <p className='justify'>
              Arranging promotional giveaways, discounts, or gift bags for attendees to incentivize participation and create excitement around the shop opening. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Media Coordination</h3>
              <p className='justify'>
              Handling media relations and coordinating press coverage for the shop opening event to maximize visibility and publicity. 
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
