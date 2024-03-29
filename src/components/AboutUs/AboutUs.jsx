import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../assets/asd.jpg';
import t2 from '../../assets/dfg.jpg';
import t3 from '../../assets/fgh.jpg';
import t4 from '../../assets/ghj.jpg';
import t5 from '../../assets/ghj.jpg';
import { Helmet } from 'react-helmet'
import TextImageSection from './textimage';
import { FaWhatsapp } from 'react-icons/fa';
import Service1 from '../servicepages/service1'
import FeatureCard from './FeatureCard'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
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
        <div className="home-container">
            <div className="home-hero">
                <div className="heroContainer home-hero1">
                    <div className="home-container01">
                        <h1 className="home-hero-heading heading1">About Us</h1>
                        <span className="home-hero-sub-heading bodyLarge">
                            <span>
                                <span>
                                    <span>Your Trusted Event Management Partner</span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                                <span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                            </span>
                            <span>
                                <span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                                <span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                </span>
                            </span>
                        </span>
                        <div className="home-btn-group">
                            <button className="buttonFilled">Learn More →</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-features m-5">
                <div className="featuresContainer">
                    <div className="home-features1">
                        <div className="home-container02">
                            <h2 className="home-features-heading heading2">
                                Our Key Features
                            </h2>
                            <span className="home-features-sub-heading bodyLarge">
                                <span>
                                    <span>
                                        <span>Discover what sets us apart in event management</span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                    </span>
                                    <span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                    </span>
                                </span>
                                <span>
                                    <span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                    </span>
                                    <span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: ' ',
                                                }}
                                            />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="home-container03">
                            <FeatureCard
                                heading="Customized Event Planning"
                                subHeading="Tailored event planning services to meet your specific needs"
                            ></FeatureCard>
                            <FeatureCard
                                heading="Vendor Management"
                                subHeading="Expert handling of vendor negotiations and coordination"
                            ></FeatureCard>
                            <FeatureCard
                                heading="On-site Coordination"
                                subHeading="Professional on-site management to ensure seamless event execution"
                            ></FeatureCard>
                            <FeatureCard
                                heading="Budget Management"
                                subHeading="Efficient budget planning and tracking to optimize resources"
                            ></FeatureCard>
                        </div>
                    </div>
                </div>
                <div className="home-container">
                    <TextImageSection />
                </div>
            </div>
            <div className="home-banner">
                <div className="bannerContainer home-banner1">
                    <h2>Services We Provide</h2>
                    <br />
                    <div className="our-services justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                        <div className={`col service-card ${showDetails[0] ? 'show-details' : ''}`}  onClick={()=>navigate('/global-trader/service1')}>
                            <div className="service-icon">
                                <img src={t1} alt="Service 1 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-info">
                                <h3>Service 1</h3>
                                {showDetails[0] && (
                                    <p  className='justify'>
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
                    <h1 className="home-banner-heading heading2">
                        Welcome to Our Event Management Company
                    </h1>
                    <span className="home-banner-sub-heading bodySmall">
                        <span>
                            <span>
                                <p className='justify'>
                                    At our event management company, we specialize in creating
                                    unforgettable experiences for all types of events. From
                                    corporate gatherings to weddings and everything in between, we
                                    are dedicated to bringing your vision to life. With our team
                                    of experienced professionals, we handle every detail with
                                    precision and care to ensure a seamless and successful event.
                                    Discover how we can make your next event truly special.
                                </p>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                            <span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <span>
                            <span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                            <span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                    </span>
                    <div className='home-btn-group'>
                        <button className="buttonFilled">Discover More</button>
                    </div>
                    <div className="community-page">
                        <a href="https://wa.me/918939169177" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
                            <FaWhatsapp size={50} color="green" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;