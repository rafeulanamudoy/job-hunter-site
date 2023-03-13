import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { user: { role } } = useSelector(state => state.auth);
    const employterRoutes = [
        {
            name: "Add Job",
            path: "addJob",
            id: 1
        }, {
            name: "Your Post Job",
            path: "postedJob",
            id: 2
        }
    ]
    const candidateRoutes = [
        {
            name: "Applied Job",
            path: "appliedJob",
            id: 3
        }
    ]

    return (
        <div>
            <h1>this is sidebaer</h1>

            {

                role === "employer" && employterRoutes.map(({ name, path, id }) => (
                    <div key={id}>

                        <Link to={path}>{name}</Link>
                    </div>


                ))


            }
            {

                role === "candidate" && candidateRoutes.map(({ name, path }) => (
                    <div>

                        <Link to={path}>{name}</Link>
                    </div>


                ))
            }




        </div>
    );
};

export default Sidebar;