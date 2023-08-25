import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FeCard from '../components/FeCard'
import { CgArrowRightR } from 'react-icons/cg';


const features = {
    feature1: {
        title: "Feature 1",
        icon: <CgArrowRightR />,
    },
    feature2: {
        title: "Feature 2",
        icon: <CgArrowRightR />,
    },
    feature3: {
        title: "Feature 3",
        icon: <CgArrowRightR />,
    },
    feature4: {
        title: "Feature 4",
        icon: <CgArrowRightR />,
    }
};

const Features = () => {
    return (
        <Row className='p-0 m-0'>
            <Col className='p-0 m-0'>
                <div className='section-padding' id='features'>
                    <div className='title-3 mb-5 text-center'>More time for your Participants</div>
                    <div className='crd-set'>
                        <FeCard icon={features.feature1.icon} title={features.feature1.title}>
                            <div>
                                Nisi fusce sollicitudin, mi erat id tortor proin consequat lacus
                                ipsum a gravida tristique
                                non ligula venenatis vulputate
                                Nibh senectus gravida augue eget nisi
                                volutpat. Quis rhoncus aliquam quis proin.
                            </div>
                        </FeCard>
                        <FeCard icon={features.feature2.icon} title={features.feature2.title}>
                            <div>
                                Nisi fusce sollicitudin, mi erat id tortor proin consequat lacus
                                ipsum a gravida tristique
                                non ligula venenatis vulputate
                                Nibh senectus gravida augue eget nisi
                                volutpat. Quis rhoncus aliquam quis proin.
                            </div>
                        </FeCard>
                        <FeCard icon={features.feature3.icon} title={features.feature3.title}>
                            <div>
                                Nisi fusce sollicitudin, mi erat id tortor proin consequat lacus
                                ipsum a gravida tristique
                                non ligula venenatis vulputate
                                Nibh senectus gravida augue eget nisi
                                volutpat. Quis rhoncus aliquam quis proin.
                            </div>
                        </FeCard>
                        <FeCard icon={features.feature4.icon} title={features.feature4.title}>
                            <div>
                                Nisi fusce sollicitudin, mi erat id tortor proin consequat lacus
                                ipsum a gravida tristique
                                non ligula venenatis vulputate
                                Nibh senectus gravida augue eget nisi
                                volutpat. Quis rhoncus aliquam quis proin.
                            </div>
                        </FeCard>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Features
