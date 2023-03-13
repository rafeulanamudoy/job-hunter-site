import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobCard from '../../../components/reusable/JobCard/JobCard';
import { useFilterByDateQuery, useGetAppliedJobsQuery } from '../../../features/job/jobApi';

import "./AppliedJobs.css"

const AppliedJobs = () => {
    const { user: { email } } = useSelector(state => state.auth)
    const { data, isLoading } = useGetAppliedJobsQuery(email, { refetchOnMountOrArgChange: true });
    const { data: filterDate, isLoading: filterByDateLoading } = useFilterByDateQuery(email);
    const [dateFilter, setDateFilter] = useState(false);
    const [approvalFilter, setApprovalFilter] = useState(false)
    let content;
    const activeClass = "btn btn-danger"
    //const [dateFilter, setDateFilter] = useState(false)


    useEffect(() => {

        <div>loading</div>

    }, [filterByDateLoading, isLoading])
    const handleDateFilter = () => {

        setDateFilter(true)
        setApprovalFilter(false)
    }
    const handleApprovalFilter = () => {
        setDateFilter(false)
        setApprovalFilter(true)
    }



    if (data?.data?.length > 0) {
        content = data?.data?.map(job => <JobCard job={job} key={job._id}></JobCard>)
    }

    if (dateFilter) {

        content = filterDate?.data?.map(job => <JobCard job={job} key={job._id}></JobCard>)
    }






    return (
        <div>
            <h1>this is applyed jobs</h1>
            <Button className={dateFilter ? `mx-2 ${activeClass}` : `mx-2`} onClick={handleDateFilter}>Filter By Date</Button>
            <Button className={approvalFilter ? `mx-2 ${activeClass}` : `mx-2`} onClick={handleApprovalFilter}>Filter By Approval</Button>


            {
                content
            }

        </div>
    );
};

export default AppliedJobs;