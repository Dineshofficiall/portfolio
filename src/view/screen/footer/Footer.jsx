// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// scroll
import {Link as ScrollLink} from 'react-scroll'

// icons
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

// css
import "./footer.css"

function Footer() {
    return (
        <Container fluid className='my-1 py-4'>
            <Row lg={2} className='footer-component' >
                <h5>Dinesh Kumar</h5>
                <Col lg={5} className='links'>
                    <ScrollLink
                        activeClass='active'
                        className='nav-link'
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{cursor: "pointer"}}
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        activeClass='active'
                        className='nav-link'
                        to="skills"
                        spy={true}
                        offset={-70}
                        duration={500}
                        smooth={true}
                        style={{cursor : "pointer"}}
                    >
                        Skills
                    </ScrollLink>
                    <ScrollLink
                        activeClass='active'
                        className='nav-link'
                        to='work'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{cursor: "pointer"}}
                    >
                        Work
                    </ScrollLink>
                    <ScrollLink
                        activeClass='active'
                        className='nav-link'
                        to='projects'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{cursor: "pointer"}}
                    >
                        Projects
                    </ScrollLink>
                    <ScrollLink
                        activeClass='active'
                        className='nav-link'
                        to='education'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{cursor: "pointer"}}
                    >
                        Educational
                    </ScrollLink>
                </Col>
                <Col lg={3} className='links'>
                    <FaXTwitter />
                    <IoLogoLinkedin />
                    <IoLogoGithub />
                </Col>
                <span>&copy; 2024 Dinesh Kumar. All rights reserved.</span>
            </Row>
        </Container>
    )
}

export default Footer