import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useToggolePositionMutation } from '../../../features/job/jobApi';
import "./EmployerJobCard.css"

const EmployerJobCard = ({ job: { postion, companyName, salary, applicants, isOpen, _id } }) => {
    const [toggolePosition] = useToggolePositionMutation()
    const navigate = useNavigate()
    const handlePosition = (e) => {



        const data = {
            jobId: _id,
            toggole: !isOpen
        }
        if (e.target) {
            window.confirm(`do you want to ${isOpen ? "close" : "open"} this position`)
        }

        toggolePosition(data)
            .unwrap()
            .then(() => toast.success(`successfully ${isOpen ? "close" : "open"} this position`))
            .catch(error => console.log(error))



    }
    return (
        <Col>
            <Card>

                <Card.Body>
                    <Card.Title>CompanyName:{companyName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Position:{postion}</Card.Subtitle>
                    {
                        isOpen ? <Button onClick={handlePosition} > close this position</Button> : <Button onClick={handlePosition}>Open This Postion</Button>
                    }

                    <Card.Text>Applied Candidate:{applicants.length}</Card.Text>
                    <Button onClick={() => navigate("/dashboard/applied-candidates", {
                        state: {
                            applicants: applicants,
                            jobId: _id
                        }
                    })}>Show Candidates</Button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default EmployerJobCard;