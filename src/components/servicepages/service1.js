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
        <div className='row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t1} alt="Service 1 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Promotion Events</h3>
              <p className='justify'>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t2} alt="Service 2 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Shop Opening & Branding</h3>
              <p className='justify'>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t3} alt="Service 3 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Cantervan indoor / outdoor</h3>
              <p className='justify'>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t4} alt="Service 4 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Manpower</h3>
              <p className='justify'>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
              </p>
            </div>
          </div>
          <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded">
            <img src={t5} alt="Service 5 Icon" className="img-fluid rounded-lg mx-auto d-block" style={{ height: '250px', width: '450px' }} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            </a>
            <div className="service-info text-center">
              <h3>Installation & Activation</h3>
              <p className='justify'>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
              </p>
            </div>
          </div>
        </div>
        <h1 class="display-1 text-primary col text-center">Our Past Activities</h1>
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
      </div>
    </div>
  );
}

export default Services;
