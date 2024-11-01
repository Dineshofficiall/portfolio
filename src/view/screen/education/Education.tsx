// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { EducationalViewModal } from '../../../viewModal/EducationalViewModal';

// CSS
import './education.css';

const Education:React.FC = () => {
    const educationalModal = EducationalViewModal();
    
    return (
        <section id="education" className='my-5 py-5'>
            <Container className='col-12 col-md-10 col-lg-7'>
                <div className='text-center mb-5'>
                    <h1>Education</h1>
                    <article>My education has been a journey of self-discovery and growth. My educational details are as follows.</article>
                </div>
                <Row className='col-12 ms-0 ms-sm-2 contents'>
                    <aside className='content-inner-block'>
                        {educationalModal.map((data, index)=>(
                            <Col key={index} className='col-12 border rounded-4 p-3 mb-4 box'>
                                <div className='d-flex align-items-center'>
                                    <Image src={data.eduIcon} width={45} className='me-3' alt={data.iconAlt} />
                                    <div>
                                        <h5 className='m-0'>{data.schoolingName}</h5>
                                        <small className='m-0'>{data.domain}</small>
                                    </div>
                                </div>
                                <div className='mt-3 mb-2'>
                                    {data.CGPA && <h6 className='m-0'>{data.CGPA}</h6>}
                                    <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>{data.courseDuration}</em>
                                </div>
                                <article className='educationPassage'>{data.description}</article>
                            </Col>
                        ))}
                    </aside>
                </Row>
            </Container>
        </section>
    );
}

export default Education;
