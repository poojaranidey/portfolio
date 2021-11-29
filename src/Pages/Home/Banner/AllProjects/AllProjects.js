import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';

const AllProjects = () => {
    const [projects,setProjects] = useState([])
    const [text,setText] = useState('')

    useEffect(()=>{
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => {
            setProjects(data.filter(project => project?.name.toLowerCase().includes(text.toLowerCase())))
        })
    },[text])

    const searchProject = e => {
        setText(e.target.value)
    }
    return (
        <div>
            <div className="banner">
            <div className="p-3">
                <div className="row Row">
                    <div className="col-12 col-md-3">
                        <Profile/>
                        <BlockA/>
                        <Socials/>
                    </div>
                    <div style={{height:'95vh',overflow:'scroll'}} className="col-12 col-md-9 p-3">
                    <div>
                        <input onChange={searchProject} className="w-75 mx-auto p-2" placeholder="search project" type="text"/>
                        <Row xs={1} md={3} className="g-4 my-2">
                            {
                                projects.map(project => <Col key={project?.id}>
                                    <Card>
                                        <Card.Img variant="top" src={project?.image} />
                                        <Card.Body>
                                        <Card.Title>{project?.name}</Card.Title>
                                        <Card.Text style={{textAlign:'justify'}}>
                                            {project?.description}
                                        </Card.Text>
                                        <Card.Text>
                                        <Link to={`/details/${project?.id}`}><Button>Details</Button></Link>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            }
                        </Row>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllProjects;