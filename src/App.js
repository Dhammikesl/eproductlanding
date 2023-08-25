import React from 'react'
import './style/style.scss'
import Navbar from './components/NavBar'
import Hero from './hero'
import { Container } from 'react-bootstrap'
import Features from './features'
import Benefits from './benefits'
import GetInTouch from './getIn'
import Footer from './components/footer'
import ScrlTop from './components/ScrlTop'

const App = () => {
    return (
        <>
            <Container fluid className='wrap-content p-0'>
                <Navbar />
                <Hero />
                <Features />
                <Benefits />
                <GetInTouch />
                <Footer />
            </Container>
            <ScrlTop />
        </>
    )
}

export default App
