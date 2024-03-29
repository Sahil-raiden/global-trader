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
import './Services.css'
import { useNavigate } from 'react-router-dom';

function Services() {
    let navigate=useNavigate()
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
            <h2>Our Services</h2>
            <p className='justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam reiciendis molestiae, delectus sapiente sunt
                similique doloribus necessitatibus deleniti minus facilis eum perferendis explicabo, quidem earum doloremque tempora.
                Repudiandae possimus id ex accusamus blanditiis et, vero asperiores nemo qui eos, suscipit dolorum accusantium maiores,
                adipisci ratione? Adipisci impedit, amet, animi ipsa perferendis, blanditiis numquam assumenda recusandae provident
                possimus commodi corrupti facere. Atque facilis ducimus dolore? Error voluptas temporibus, explicabo quibusdam
                dignissimos molestias iusto deleniti iure laboriosam consequatur tempore assumenda corporis quod magni quasi iste
                culpa, debitis odio at repellendus nisi dolorum dolore. Alias ratione doloremque accusantium veniam eos incidunt
                explicabo sit, molestiae iusto similique cupiditate exercitationem, saepe voluptatibus asperiores tempora cum
                optio quia sed odit eveniet dolorum itaque mollitia repellat hic! Voluptatem, ipsa itaque quae consequatur a
                praesentium, aperiam expedita nisi est aspernatur officiis provident ad ex deserunt illum! Laborum ex quam at
                vel repellendus hic ullam voluptate dolorem minima.
            </p>
            <button className='primary-button mx-auto d-block'>Get Started</button>
            <div className="about-us-container">
                <h2>Whats so special about us</h2>
                <div className="our-services justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                    <div className={`col service-card ${showDetails[0] ? 'show-details' : ''}`} onClick={()=>navigate('/global-trader/service1')}>
                        <div className="service-icon">
                            <img src={t1} alt="Service 1 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                        </div>
                        <div className="service-info">
                            <h3>Service 1</h3>
                            {showDetails[0] && (
                                <p className='justify'>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={`col service-card ${showDetails[1] ? 'show-details' : ''}`} onClick={()=>navigate('/global-trader/service2')}>
                        <div className="service-icon">
                            <img src={t2} alt="Service 2 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                        </div>
                        <div className="service-info">
                            <h3>Service 2</h3>
                            {showDetails[1] && (
                                <p className='justify'>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis
                                    ut ligula non nibh varius auctor.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={`col service-card ${showDetails[2] ? 'show-details' : ''}`} onClick={()=>navigate('/global-trader/service3')}>
                        <div className="service-icon">
                            <img src={t3} alt="Service 3 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                        </div>
                        <div className="service-info">
                            <h3>Service 3</h3>
                            {showDetails[2] && (
                                <p className='justify'>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={`col service-card ${showDetails[3] ? 'show-details' : ''}`} onClick={()=>navigate('/global-trader/service4')}>
                        <div className="service-icon">
                            <img src={t4} alt="Service 4 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                        </div>
                        <div className="service-info">
                            <h3>Service 4</h3>
                            {showDetails[3] && (
                                <p className='justify'>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={`col service-card ${showDetails[4] ? 'show-details' : ''}`} onClick={()=>navigate('/global-trader/service5')}>
                        <div className="service-icon">
                            <img src={t5} alt="Service 5 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                        </div>
                        <div className="service-info">
                            <h3>Service 5</h3>
                            {showDetails[4] && (
                                <p className='justify'>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor dapibus ultricies. Duis ut ligula non nibh varius auctor.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;