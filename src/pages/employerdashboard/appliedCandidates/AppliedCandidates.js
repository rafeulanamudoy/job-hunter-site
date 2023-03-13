import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import "./AppliedCandidates.css"
const AppliedCandidates = () => {
    const { state: { applicants, jobId } } = useLocation()

    // console.log(jobId)
    const navigate = useNavigate()
    return (
        <div>
            {applicants?.map(candidate => <ol key={candidate.id}>

                <li>{candidate?.email}</li>
                <button onClick={() => navigate(`/dashboard/applied-candidate/${candidate?.email}`, { state: jobId })}>candidate details</button>
            </ol>)}
        </div>
    );
};

export default AppliedCandidates;