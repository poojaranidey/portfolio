import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';

const Details = () => {
    const {id} = useParams()
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
            const selected = data.find(select => select?.id === +id)
            setProjects(selected)
        })
    },[id])
    console.log(projects)
    return (
        <div className="banner">
            <div className="p-3">
                <div className="row Row">
                    <div className="col-12 col-md-3">
                        <Profile/>
                        <BlockA/>
                        <Socials/>
                    </div>
                    <div className="col-12 col-md-9">
                    <Card className="p-3" style={{height:'95vh'}}>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                        <Link to="/projects"><Button>Previous</Button></Link>
                        <Button>Next</Button>
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-8">
                        <Card.Img style={{height:'40vh'}} variant="top" src={projects?.image} />
                        </div>
                        <div className="col-12 col-md-4">
                        <Card.Text className="p-3">
                        {projects?.description}
                        </Card.Text>
                        </div>
                        
                        </div>
                        <Card.Body>
                        <Card.Title>{projects?.name}</Card.Title>
                        
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Details;