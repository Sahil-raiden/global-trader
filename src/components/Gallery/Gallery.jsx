import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Gallery.css'; // Import CSS file for styling
import img1 from '../../assets/Past-Events/pe1.jpeg';
import img2 from '../../assets/Past-Events/pe2.jpeg';
import img3 from '../../assets/Past-Events/pe3.jpeg';
import img4 from '../../assets/Past-Events/pe4.jpeg';
import img5 from '../../assets/Past-Events/pe5.jpeg';
import img6 from '../../assets/Past-Events/pe6.jpeg';
import img7 from '../../assets/Past-Events/pe7.jpeg';
import img8 from '../../assets/Past-Events/pe8.jpeg';
import img9 from '../../assets/Past-Events/pe9.jpeg';
import img10 from '../../assets/Past-Events/pe10.jpeg';
import img11 from '../../assets/Past-Events/pe11.jpeg';
import img12 from '../../assets/Past-Events/pe12.jpeg';
import img13 from '../../assets/Past-Events/pe13.jpeg';
import img14 from '../../assets/Past-Events/pe14.jpeg';
import img15 from '../../assets/Past-Events/pe15.jpeg';
import img16 from '../../assets/Past-Events/pe16.jpeg';
import img17 from '../../assets/Past-Events/pe17.jpeg';
import img18 from '../../assets/Past-Events/pe18.jpeg';
import img19 from '../../assets/Past-Events/pe19.jpeg';
import img20 from '../../assets/Past-Events/pe20.jpeg';
import img21 from '../../assets/Past-Events/pe21.jpeg';
import img22 from '../../assets/Past-Events/pe22.jpeg';
import img23 from '../../assets/Past-Events/pe23.jpeg';
import img24 from '../../assets/Past-Events/pe24.jpeg';
import img25 from '../../assets/Past-Events/pe25.jpeg';
import img26 from '../../assets/Past-Events/pe26.jpeg';
import img27 from '../../assets/Past-Events/pe27.jpeg';
import img28 from '../../assets/Past-Events/pe28.jpeg';
import img29 from '../../assets/Past-Events/pe29.jpeg';
import img30 from '../../assets/Past-Events/pe30.jpeg';
import img31 from '../../assets/Past-Events/pe31.jpeg';
import img32 from '../../assets/Past-Events/pe32.jpeg';
import img33 from '../../assets/Past-Events/pe33.jpeg';
import img34 from '../../assets/Past-Events/pe34.jpeg';
import img35 from '../../assets/Past-Events/pe35.jpeg';
import img36 from '../../assets/Past-Events/pe36.jpeg';
import img37 from '../../assets/Past-Events/pe37.jpeg';
import img38 from '../../assets/Past-Events/pe38.jpeg';
import img39 from '../../assets/Past-Events/pe39.jpeg';
import img40 from '../../assets/Past-Events/pe18.jpeg';

function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40
    ];

    const handleClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <Container>
            <Row>
                {images.map((imageUrl, index) => (
                    <Col key={index} xs={6} md={4} lg={3}>
                        <div className="image-container" onClick={() => handleClick(index)}>
                            <img src={imageUrl} alt={`Image ${index}`} className="img-fluid" />
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Modal to display clicked image */}
            <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="custom-modal">
                <Modal.Body>
                    <div className="modal-image">
                        <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} className="img-fluid" />
                        <button className="arrow arrow-prev" onClick={handlePrev}>&#10094;</button>
                        <button className="arrow arrow-next" onClick={handleNext}>&#10095;</button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Gallery;