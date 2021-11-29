import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div>
            <Row xs={1} md={3} className="g-4 my-2">
                {
                    projects.slice(0,3).map(project => <Col key={project?.id}>
                        <Card>
                            <Card.Img variant="top" src={project?.image} />
                            <Card.Body>
                            <Card.Title>{project?.name}</Card.Title>
                            <Card.Text style={{textAlign:'justify'}}>
                                {project?.description}<Link>More...</Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>)
                }
            </Row>
        </div>
    );
};

export default Projects;