import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/asd.jpg';
import img2 from '../../assets/dfg.jpg';
import img3 from '../../assets/fgh.jpg';
import img4 from '../../assets/ghj.jpg';
import t1 from '../../assets/asd.jpg';
import t2 from '../../assets/dfg.jpg';
import t3 from '../../assets/fgh.jpg';
import t4 from '../../assets/ghj.jpg';
import t5 from '../../assets/ghj.jpg';

function Services() {
    let navigate = useNavigate();

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
        <div className="container">
            <Slider {...settings}>
                <div>
                    <img src={img1} alt="Service 1" className="img-fluid" style={{ width: '120vmin', height: '60vmin' }} />
                </div>
                <div>
                    <img src={img2} alt="Service 2" className="img-fluid" style={{ width: '120vmin', height: '60vmin' }} />
                </div>
                <div>
                    <img src={img3} alt="Service 3" className="img-fluid" style={{ width: '120vmin', height: '60vmin' }} />
                </div>
                <div>
                    <img src={img4} alt="Service 4" className="img-fluid" style={{ width: '120vmin', height: '60vmin' }} />
                </div>
            </Slider>

            <h2 className="text-center">Our Services</h2>
            <p className='justify text-center'>
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
            <button className='btn btn-primary mx-auto d-block'>Get Started</button>
            <div className="about-us-container">
                <h2 className="text-center">What's So Special About Us</h2>
                <div className='row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" onClick={() => navigate('/global-trader/service1')}>
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
                    <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" onClick={() => navigate('/global-trader/service2')}>
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
                    <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" onClick={() => navigate('/global-trader/service3')}>
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
                    <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" onClick={() => navigate('/global-trader/service4')}>
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
                    <div className="col mb-4 bg-image hover-overlay hover-zoom shadow-1-strong rounded" onClick={() => navigate('/global-trader/service5')}>
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
            </div>
        </div>
    );
}

export default Services;
