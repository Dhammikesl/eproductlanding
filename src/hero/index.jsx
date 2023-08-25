import React from 'react'
import banner from '../assets/hero.jpeg'
import Bg from '../assets/background.svg'
import { TiTick } from 'react-icons/ti';


import { Button, Col, Row } from 'react-bootstrap'
// import EmailForm from '../../components/Email'
import { BsArrowRight } from 'react-icons/bs';


const Hero = () => {
    return (
        <Row className='p-0 m-0'>
            <Col className='p-0 m-0'>
                {/* <div><Bg /></div> */}
                <div className='hero section-padding section-padding-hero' id='home'>
                    <div className='hero-content'>
                        <div className='title-1'>
                            The NDIS Digital Solution </div>

                        <div className='sub-title-1'>That Makes Your Life Easier.</div>
                        <div className='title-2 mt-10'>
                            Improve your NDIS administration and support worker management with our digital solution.

                            <div className='mt-3 mb-5'>
                                <div>
                                    <TiTick /><span className='mx-1'>Save time</span>
                                </div>
                                <div>
                                    <TiTick /><span className='mx-1'>Improve efficiency,</span>
                                </div>
                                <div>
                                    <TiTick /><span className='mx-1'>And increase compliance with our cloud-based solution</span>
                                </div>
                            </div>

                        </div>
                        <div className='hero-input'>
                            <Button variant='white' className='btn'>Start free trial</Button>
                            <Button variant='invisible' className='btn ms-2'>Request a demo <BsArrowRight /></Button>
                        </div>
                        {/* <EmailForm /> */}

                    </div>



                    <div className='hero-image'>
                        <img src={banner} alt="hero" />
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Hero
