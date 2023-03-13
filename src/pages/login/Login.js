import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUser } from '../../features/auth/authSlice';
import "./Login.css"
const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const { email, isLoading, isError, error } = useSelector(state => state.auth)

    useEffect(() => {
        if (!isLoading && email) {
            navigate("/")
        }

    }, [email, isLoading, navigate])

    useEffect(() => {
        if (isError) {

            toast.error(error)
        }

    }, [isError, error])


    const onSubmit = data => {
        //console.log(password, confirmPassword)

        console.log(data)

        dispatch(loginUser(data))


        reset()

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder='enter your email'  {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder='enter your password'  {...register("password")} />

            {/* errors will return when field validation fails  */}


            <input type="submit" />

        </form>
    );
};

export default Login;