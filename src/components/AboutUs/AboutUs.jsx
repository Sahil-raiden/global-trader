import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../assets/Services/promotion-events.png'
import t2 from '../../assets/Services/shop-opening-branding.png';
import t3 from '../../assets/Services/cantervan-indoor-outdoor.png';
import t4 from '../../assets/Services/manpower.png';
import t5 from '../../assets/Services/installation-activation.png';
import t7 from '../../assets/Past-Events/pe31.jpeg';
import t8 from '../../assets/Past-Events/pe32.jpeg';
import t9 from '../../assets/Past-Events//pe33.jpeg';
import t10 from '../../assets/Past-Events/pe34.jpeg';
import t11 from '../../assets/Past-Events/pe35.jpeg';
import t12 from '../../assets/Past-Events/pe36.jpeg';
import t13 from '../../assets/Past-Events/pe37.jpeg';
import t14 from '../../assets/Past-Events/pe38.jpeg';
import t15 from '../../assets/Past-Events/pe39.jpeg';
import FeatureCard from './FeatureCard'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
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
        <div className="home-container">
            <div className="home-hero">
                    <div className="home-container01 heroContainer">
                        <h1 className="home-hero-heading heading1 text-center m-0">About Us</h1>
                        <span className="home-hero-sub-heading bodyLarge">
                            <h4 className='text-center'>Your Trusted Event Management Partner </h4>
                        </span>
                        <div className="home-btn-group">
                            <button className="buttonFilled" onClick={() => navigate('/global-trader/')} >Learn More</button>
                        </div>
                    </div>
            </div>
            <div className="home-features m-5">
                <div className="featuresContainer">
                    <div className="home-features1">
                        <div className="home-container02">
                            <h2 className="home-features-heading heading2 text-center">
                                Our Key Features
                            </h2>
                            <span className="home-features-sub-heading bodyLarge">
                                <span>
                                    <span>
                                        <span><h3 className='text-center'>Discover what sets us apart in event management</h3></span>
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
                            <br></br>
                            <FeatureCard
                                heading="Customized Event Planning"
                                subHeading="Tailored event planning services to meet your specific needs"
                            ></FeatureCard>
                            <Slider {...settings}>
                                <div>
                                    <img src={t7} alt="Service 7" style={{ height: '60vmin' }} />
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
                                <div>
                                    <img src={t13} alt="Service 13" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t14} alt="Service 14" style={{ height: '60vmin' }} />
                                </div>
                                <div>
                                    <img src={t15} alt="Service 15" style={{ height: '60vmin' }} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="home-container">

                </div>
            </div>
            <div className="home-banner">
                <div className="bannerContainer home-banner1 ">
                    <h2 className='text-center'>Services We Provide</h2>
                    <br />
                    <div className="our-services justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                        <div className={`col service-card ${showDetails[0] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service1')}>
                            <div className="service-icon au-icon">
                                <img src={t1} alt="Service 1 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Promotion Events</h3>
                                {showDetails[0] && (
                                    <p className='text-black'>
                                        Stand out from the competition with our innovative promotion and in-shop branding solutions. From eye-catching displays to interactive experiences, we help you create immersive brand experiences that resonate with your audience and drive sales.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[1] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service2')}>
                            <div className="service-icon au-icon">
                                <img src={t2} alt="Service 2 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Shop Opening & Branding</h3>
                                {showDetails[1] && (
                                    <p className=' text-black'>
                                        Make a memorable impact with our tailored shop opening services. From concept development to execution, we create unforgettable launch events that drive foot traffic, generate buzz, and leave a lasting impression on your customers.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[2] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service3')}>
                            <div className="service-icon au-icon">
                                <img src={t3} alt="Service 3 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Cantervan indoor / outdoor</h3>
                                {showDetails[2] && (
                                    <p className=' text-black'>
                                        Capture attention and reach your target audience with our dynamic outdoor cantervan campaigns. Whether it's a product launch, awareness drive, or promotional event, our mobile marketing solutions deliver your message effectively to the masses.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[3] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service4')}>
                            <div className="service-icon au-icon">
                                <img src={t4} alt="Service 4 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Manpower</h3>
                                {showDetails[3] && (
                                    <p className=' text-black'>
                                        Our experienced team ensures that your event runs smoothly by providing skilled and reliable manpower. From event setup to guest assistance, we handle all staffing requirements with professionalism and efficiency.
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={`col service-card ${showDetails[4] ? 'show-details' : ''}`} onClick={() => navigate('/global-trader/service5')}>
                            <div className="service-icon au-icon">
                                <img src={t5} alt="Service 5 Icon" style={{ height: '150px' }} className='d-block mx-auto' />
                            </div>
                            <div className="service-infoab au-info">
                                <h3 className="text-black">Installation & Activation</h3>
                                {showDetails[4] && (
                                    <p className=' text-black'>
                                        Let us take care of the logistics with our expert installation services. Whether it's setting up elaborate stage designs, exhibition booths, or technical equipment, our team ensures everything is in place for a flawless event experience.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <h1 className="home-banner-heading heading2 justify text-center">
                        Welcome to Our Event Management Company
                    </h1>
                    <span className="home-banner-sub-heading bodySmall justify">
                        <span>
                            <span>
                                <p className='justify p-5'>
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
                        <button className="buttonFilled" onClick={() => navigate('/global-trader/')}>Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;