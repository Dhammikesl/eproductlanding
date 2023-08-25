import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const FeCard = ({ icon, title, children }) => {
    return (
        <div className='crd-features'>
            <div className='wrap-box-feature'>
                <div className='box-feature'>
                    <div className='icon'>{icon}</div>
                    <div className='content'>
                        <div className='fer-title title-4'>{title}</div>
                        <div className='fer-detail'>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeCard


