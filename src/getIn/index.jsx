import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const GetInTouch = () => {
    return (
        <Row className='m-0'>
            <Col className='m-0 p-0'>
                <div className='section-padding' id='get-in-touch'>
                    <div className='title-3'>Get In Touch</div>
                    <div>
                        <p className='title-2'>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        </p>
                    </div>

                    <div className='email-input mt-4'>
                        <input type="email" placeholder='Your Email Address' />
                        <Button variant='white' className='btn'>Get Started</Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default GetInTouch
