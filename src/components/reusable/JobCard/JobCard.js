import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import "./JobCard.css"

const JobCard = ({ job: { postion, companyName, salaryRange, expereince, overView, _id, isOpen, email } }) => {
    const navigate = useNavigate()
    const { user: { role } } = useSelector(state => state.auth)
    console.log(salaryRange, email, companyName)





    return (

        <Col>
            <Card>

                <Card.Body>
                    <Card.Title>{postion}</Card.Title>
                    <Card.Text>
                        {overView}
                    </Card.Text>
                    <Card.Text>
                        {salaryRange}
                    </Card.Text>

                    {
                        isOpen ? <Card.Text>
                            This Position is Open to Apply

                        </Card.Text> : <Card.Text>
                            This Postion is closed
                        </Card.Text>
                    }

                    <Button onClick={() => navigate(`/job/${_id}`)}>Details</Button>


                    {
                        role === "candidate" && <Button onClick={() => navigate(`/directMessage/${email}`)}>Message</Button>
                    }


                </Card.Body>
            </Card>
        </Col>

    );
};

export default JobCard;