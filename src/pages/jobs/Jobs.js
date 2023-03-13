import React from 'react';
import { Row } from 'react-bootstrap';

import JobCard from '../../components/reusable/JobCard/JobCard';


import { useGetJobsQuery } from '../../features/job/jobApi';
import "./Jobs.css"
const Jobs = () => {
    const { data } = useGetJobsQuery();



    return (
        <div>
            <h1>this is jobs</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    data?.data?.map(job => <JobCard job={job} key={job._id}></JobCard>)
                }
            </Row >
        </div>

    );
};

export default Jobs;