// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

// image
import { ProjectImage } from '../../../assets/Images/ProjectImage';

const WebProject:React.FC = () => {
    const img = ProjectImage();
    return (
        <aside className='content-inner-block'>
            <Row xs={1} sm={2} lg={3} className="g-4 g-sm-5 g-md-4 g-lg-3 my-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='p-2 rounded-4 project-card'>
                            <Card.Img variant="top" className='rounded-4 p-2 object-fit-cover project-card' height={180} src={img.projectCardImg} />
                            <Card.Header className='header-content'>
                                <li>Bootstrap</li>
                                <li>React Js</li>
                                <li>Java</li>
                                <li>Redux</li>
                                <li>Spring Boot</li>
                                <li>Docker</li>
                            </Card.Header>
                            <Card.Body className='project-card pt-2 pb-2 px-2'>
                                <Card.Title className='project-card my-0'>
                                    Card title
                                </Card.Title>
                                <p className='date-range'><em>Aug 2024 - Sep 2024</em></p>
                                <Card.Text  className='project-description'>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <hr className='mt-0 mb-2' />
                            <Card.Footer className='card-footer'>
                                last Modified : 23/05/2023
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </aside>
    )
}

export default WebProject