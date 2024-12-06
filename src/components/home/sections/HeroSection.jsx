import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSearch, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

const carouselImages = [
  'https://th.bing.com/th/id/OIP.xLnFqbHKHk5FkRwlLzLc2AHaC7?w=1520&h=600&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.xLnFqbHKHk5FkRwlLzLc2AHaC7?w=1520&h=600&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.xLnFqbHKHk5FkRwlLzLc2AHaC7?w=1520&h=600&rs=1&pid=ImgDetMain'
];

function HeroSection() {
  const [searchFocused, setSearchFocused] = useState(false);

  const searchIconVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: { 
      scale: [1, 1.2, 1],
      rotate: [0, -10, 10, -10, 0],
      transition: { 
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <section className="hero-section">
      <Carousel fade interval={5000} controls={false}>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-carousel-image"
              style={{
                backgroundImage: `url(${image})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="hero-overlay">
                <Container className="h-100">
                  <Row className="align-items-center h-100">
                    <Col lg={6}>
                      <div className="hero-content">
                        <motion.h1 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-white"
                        >
                          Your Health Is Our Top Priority
                        </motion.h1>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="lead text-white"
                        >
                          Providing Quality Healthcare Services with Advanced Medical Technology
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <InputGroup className="search-group">
                            <Form.Control
                              type="text"
                              placeholder="Search doctors by name or specialty"
                              onFocus={() => setSearchFocused(true)}
                              onBlur={() => setSearchFocused(false)}
                            />
                            <Button variant="primary">
                              <motion.span
                                variants={searchIconVariants}
                                initial="initial"
                                animate={searchFocused ? "animate" : "initial"}
                              >
                                <FaSearch />
                              </motion.span>
                              Search
                            </Button>
                          </InputGroup>
                        </motion.div>
                      </div>
                    </Col>
                    <Col lg={6} className="d-none d-lg-block">
                      <motion.div 
                        className="appointment-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <div className="hotline-card">
                          <div className="icon-wrapper">
                            <FaPhoneAlt className="text-primary" />
                          </div>
                          <div className="hotline-info">
                            <h5>Emergency Hotline</h5>
                            <p className="phone-number">1-800-123-4567</p>
                          </div>
                        </div>
                      </motion.div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroSection;