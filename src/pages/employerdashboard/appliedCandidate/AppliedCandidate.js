import React from 'react';


import { useNavigate, useParams } from 'react-router';
import { useCandidateInfoQuery, } from '../../../features/job/jobApi';

import "./AppliedCandidate.css"

const AppliedCandidate = () => {
    const { email } = useParams()



    const navigate = useNavigate()



    const { data } = useCandidateInfoQuery(email)
    // console.log(data)

    const { firstName, lastName, address, city, thana, email: clientEmail, gender, _id: clientId } = data?.data || {}






    return (
        <div>
            Candidte Details
            <h1>candidate id:{clientId} </h1>
            <h1>Name:{firstName} {lastName}</h1>
            <h1>Email:{clientEmail}</h1>
            <h1>Phone Number:{ }</h1>
            <h1>Gender:{gender}</h1>
            <h1>Address:{address}</h1>
            <h1>City:{city}</h1>
            <h1>Thana:{thana}</h1>
            <button onClick={() => navigate(`/directMessage/${clientEmail}`)} type="button">Want to Chat</button>
            <div>

            </div>

        </div>
    );
};

export default AppliedCandidate;