import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Imgbenift from '../assets/benefts.jpg'

const Benefits = () => {
    return (
        <Row className='section-padding m-0' id='benefits'>
            <Col md={6}>
                <div className='wrap-info'>
                    <div className='title-3'>The main benefits of DSMP</div>
                    <div className='para-benefits'>
                        <p>Cubilia est placerat habitasse ultricies nonummy inceptos penatibus
                            volutpat non tempor et ornare conubia vivamus interdum id
                            morbi ridiculus Cursus magna risus parturient faucibus non,
                            ultricies. Sodales aptent lacus fringilla malesuada torquent condimentum, dolor.
                            Sollicitudin nonummy nunc convallis velit turpis est cursus nostra.
                        </p>
                        <p> Gravida dis egestas. Blandit parturient lectus Pretium in
                            ullamcorper eget etiam tempus cursus nostra. Sed sollicitudin maecenas.
                        </p>
                        <p> Class. Sapien tortor ultricies amet praesent purus,
                            fermentum egestas posuere. Tempor suscipit id nibh nibh parturient
                            vehicula cursus Diam ultrices, rutrum volutpat nulla mi non duis
                            turpis pede venenatis diam bibendum. Semper, pharetra tortor rhoncus hendrerit.
                            Rhoncus bibendum a mi.
                        </p>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className='img-wrap-benefits'>
                    <img src={Imgbenift} alt='image-benefits' className='fluid img-benefits'></img>
                </div>
            </Col>
        </Row>
    )
}

export default Benefits
