import React from 'react';
import { useNavigate, useParams } from 'react-router';
import EmployerRegistration from "../register/EmployerRegistration";
import CandidateRegistration from "../register/CandidateRegistration"

const AccountCreator = () => {

    const navigate = useNavigate()
    const { type } = useParams()
    console.log(type)

    if (type === "employer") {

        return <EmployerRegistration></EmployerRegistration>
    }

    if (type === "candidate") {
        return <CandidateRegistration></CandidateRegistration>
    }

    return (
        <div>
            <h1>this is account creator</h1>

            <div>
                <button onClick={() => navigate("/register/employer")}>employer</button>
                <button onClick={() => navigate("/register/candidate")}>
                    candidate
                </button>
            </div>
        </div>
    );
};

export default AccountCreator;