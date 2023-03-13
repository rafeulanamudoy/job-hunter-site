import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main.js"
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login"
import DashBoard from "../layouts/dashboard/DashBoard.js";
import AddJob from "../pages/employerdashboard/addjob/AddJob";
import CandidateDashBoard from "../pages/candidatedashboard/candidateDashBoard/CandidateDashBoard";
import EmployerDashBoard from "../pages/employerdashboard/employerDashboard/EmployerDashBoard"

import PrivateRoute from "../utiltites/PrivateRoute.js";
import AccountCreator from "../pages/register/AccountCreator.js";
import Jobs from "../pages/jobs/Jobs"
import JobDetails from "../pages/jobDetails/JobDetails.js";
import AppliedJobs from "../pages/candidatedashboard/applyedJobs/AppliedJobs"
import EmployerPostJob from "../pages/employerdashboard/employerPostJob/EmployerPostJob.js";
import AppliedCandidates from "../pages/employerdashboard/appliedCandidates/AppliedCandidates.js";
import AppliedCandidate from "../pages/employerdashboard/appliedCandidate/AppliedCandidate.js";
import DirectMessage from "../pages/DirectMessage/DirectMessage"
const routes = createBrowserRouter([


    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: (
                    <PrivateRoute>
                        <AccountCreator></AccountCreator>
                    </PrivateRoute>
                )
            }
            ,
            {

                path: "/register/:type",
                element: <PrivateRoute>
                    <AccountCreator></AccountCreator>
                </PrivateRoute>
            }
            ,
            {
                path: "/jobs",
                element: <Jobs></Jobs>
            },
            {
                path: "job/:id",
                element: <JobDetails></JobDetails>
            },
            {
                path: "/directMessage/:email",
                element: <DirectMessage></DirectMessage>
            },

        ]
    },
    {

        path: "/dashboard",
        element:
            <PrivateRoute>

                <DashBoard></DashBoard>
            </PrivateRoute>
        ,
        children: [{
            path: "addJob",
            element: <AddJob></AddJob>
        },
        {
            path: "appliedJob",
            element: <AppliedJobs></AppliedJobs>

        },
        {
            path: "postedJob",
            element: <EmployerPostJob></EmployerPostJob>
        },

        {

            path: "candidate",
            element: <CandidateDashBoard></CandidateDashBoard>
        },
        {

            path: "employer",
            element: <EmployerDashBoard></EmployerDashBoard>
        },
        {
            path: "applied-candidates",
            element: <AppliedCandidates></AppliedCandidates>
        },
        {
            path: "applied-candidate/:email",
            element: <AppliedCandidate></AppliedCandidate>
        }


        ]
    }



]


)

export default routes;