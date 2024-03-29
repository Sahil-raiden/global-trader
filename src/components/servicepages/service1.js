import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/asd.jpg';
import img2 from '../../assets/dfg.jpg';
import img3 from '../../assets/fgh.jpg';
import img4 from '../../assets/ghj.jpg';
import t1 from '../../assets/asd.jpg';
import t2 from '../../assets/dfg.jpg';
import t3 from '../../assets/fgh.jpg';
import t4 from '../../assets/ghj.jpg';
import t5 from '../../assets/ghj.jpg';
import t6 from '../../assets/ghj.jpg';
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
  };
  return (
    <div className="services">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Service 1" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={img2} alt="Service 2" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={img3} alt="Service 3" style={{ height: '60vmin' }} />
        </div>
        <div>
          <img src={img4} alt="Service 4" style={{ height: '60vmin' }} />
        </div>
      </Slider>
      <br></br>
      <button className='primary-button mx-auto d-block'>Get This Service</button>
      <br></br>
      <br></br>
      <h2>Service 1</h2>
      <br></br>
      <br></br>
      <div className="about-us-container">
      <div className="our-services justify-content-center row row-cols-1 row-cols-md-2">
          <div className={`col service-card ${showDetails[0] ? 'show-details' : ''}`}>
            <div className="service-icon">
              <img src={t1} alt="Service 1 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
            </div>
            <div className="service-info">
              <h3>EVENT 1</h3>
              {showDetails[0] && (
                <p className='justify'>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                </p>
              )}
            </div>
          </div>
          <div className={`col service-card ${showDetails[1] ? 'show-details' : ''}`}>
            <div className="service-icon">
              <img src={t2} alt="Service 2 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
            </div>
            <div className="service-info">
              <h3>EVENT 2</h3>
              {showDetails[1] && (
                <p className='justify'>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis
                  ut ligula non nibh varius auctor.
                </p>
              )}
            </div>
          </div>
          <div className={`col service-card ${showDetails[2] ? 'show-details' : ''}`} >
            <div className="service-icon">
              <img src={t3} alt="Service 3 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
            </div>
            <div className="service-info">
              <h3>EVENT 3</h3>
              {showDetails[2] && (
                <p className='justify'>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                </p>
              )}
            </div>
          </div>
          <div className={`col service-card ${showDetails[3] ? 'show-details' : ''}`} >
            <div className="service-icon">
              <img src={t4} alt="Service 4 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
            </div>
            <div className="service-info">
              <h3>EVENT 4</h3>
              {showDetails[3] && (
                <p className='justify'>
                  Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                </p>
              )}
            </div>
          </div>
          <div className={`col service-card ${showDetails[4] ? 'show-details' : ''}`} >
            <div className="service-icon">
            </div>
          </div>
          <div>
            <h2 className="section-heading">Our Past Activities</h2>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t6} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t6} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 text-image-section">
                <div className="col text-content">
                    <p className="section-text justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error totam, nihil incidunt qui pariatur velit sunt, accusantium quis nesciunt odit ullam ratione odio? Veniam, eligendi earum repellendus perferendis consectetur accusantium numquam quo at veritatis porro adipisci. Delectus laudantium, nihil exercitationem, officiis eaque ratione voluptates inventore iste mollitia a, blanditiis repellendus.
                    </p>
                </div>
                <div className="col image-content">
                    <img src={t5} alt="Description of Image" className="section-image" style={{ height: '300px' }} />
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Services;