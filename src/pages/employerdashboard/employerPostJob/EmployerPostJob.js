import React from 'react';
import { useSelector } from 'react-redux';
import EmployerJobCard from '../../../components/reusable/EmployerJobCard/EmployerJobCard';

import { useJobByEmailQuery } from '../../../features/job/jobApi';
import "./EmployerPostJob.css"

const EmployerPostJob = () => {
    const { user: { email } } = useSelector(state => state.auth)
    const { data, isLoading } = useJobByEmailQuery(email)

    if (isLoading) {
        <div>loading</div>
    }


    return (
        <div>
            {

                data?.data.map(job => <EmployerJobCard key={job._id} job={job}></EmployerJobCard>)
            }



        </div>
    );
};

export default EmployerPostJob;