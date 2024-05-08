import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../assets/Service-1/1.png';
import t2 from '../../assets/Service-1/2.png';
import t3 from '../../assets/Service-1/3.png';
import t4 from '../../assets/Service-1/4.png';
import t5 from '../../assets/Service-1/5.png';
import t6 from '../../assets/Service-1/6.png';
import t7 from '../../assets/Past-Events/pe1.jpeg';
import t8 from '../../assets/Past-Events/pe2.jpeg';
import t9 from '../../assets/Past-Events/pe3.jpeg';
import t10 from '../../assets/Past-Events/pe4.jpeg';
import t11 from '../../assets/Past-Events/pe5.jpeg';
import t12 from '../../assets/Past-Events/pe6.jpeg';

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
      <h2>Promotion Events</h2>
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
              <h3>Brand Strategy Consultation</h3>
              <p className='justify'>
              Providing strategic advice and guidance on developing effective branding strategies aligned with the shop's objectives and target audience. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Visual Merchandising</h3>
              <p className='justify'>
              Designing and implementing visual merchandising displays and layouts to showcase products effectively and enhance the shopping experience. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Marketing Collateral Production</h3>
              <p className='justify'>
              Designing and producing marketing collateral such as brochures, flyers, and posters for promotional campaigns and in-shop branding initiatives. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Interactive Displays</h3>
              <p className='justify'>
              Developing interactive displays and experiential marketing installations within the shop to engage customers and communicate brand messages effectively. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>In-Store Events and Workshops</h3>
              <p className='justify'>
              Organizing in-store events, workshops, and product demonstrations to attract foot traffic and encourage customer engagement and loyalty. 
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t6} alt="Service 6 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Loyalty Programs</h3>
              <p className='justify'>
              Implementing loyalty programs and incentives to reward customer loyalty and encourage repeat purchases and brand advocacy. 
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
