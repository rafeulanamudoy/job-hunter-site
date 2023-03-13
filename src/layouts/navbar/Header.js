import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../features/auth/authSlice';

import auth from '../../firebase/firebase.config';

import "./Header.css"

const Header = () => {
    const { user: { email, role } } = useSelector(state => state.auth)
    //console.log(email)
    const dispatch = useDispatch()


    let activeStyle = {
        color: "red"
    };


    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(logOut())
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <Navbar className='header-container' collapseOnSelect expand="lg"  >
            <Container >
                <Navbar.Brand href="#home">Job Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/">Home</NavLink>
                        <NavLink className="nav-link" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/jobs">jobs</NavLink>

                    </Nav>
                    <Nav>



                        {

                            email && role && <>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </>


                        }
                        {
                            email && !role && <>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } className="nav-link" to="/register">Get Statrted</NavLink>
                            </>
                        }
                        {
                            email ?
                                <>
                                    <button onClick={handleSignOut}>Logout</button>
                                    <button> {email}</button>

                                </>

                                :
                                <> <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } className="nav-link" to="/signUp">Sign Up</NavLink>
                                    <NavLink style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } className="nav-link" to="/login">Login</NavLink>


                                </>


                        }





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header

/*
 <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/jobs">jobs</NavLink>
            </div>

            <div>

                {
                    email ?
                        <>
                            <button onClick={handleSignOut}>Logout</button>

                        </>

                        :
                        <> <NavLink to="/signUp">Sign Up</NavLink>
                            <NavLink to="/login">Login</NavLink>


                        </>


                }
                {

                    email && role && <>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </>


                }
                {
                    email && !role && <>
                        <NavLink to="/register">Get Statrted</NavLink>
                    </>
                }

                <button> {email}</button>

            </div>
*/