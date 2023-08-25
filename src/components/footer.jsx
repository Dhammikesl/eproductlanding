import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='footer section-padding'>
            <div>
                <p>
                    Stone and Chalk Level 4, 11 York Street Sydney, NSW, 2000 Australia.
                </p>
                <p className='small'><strong>© 2022 iTelasoft.  All rights reserved.</strong></p>

                <img src={logo} alt="logo" width="150px"/>
            </div>

        </div>
    )
}

export default Footer
