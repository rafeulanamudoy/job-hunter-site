import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../features/auth/authSlice';
import "./SignUp.css"
const SignUp = () => {
    const { register, handleSubmit, reset, control } = useForm();
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()
    const password = useWatch({
        name: "password",
        control
    })

    const confirmPassword = useWatch({
        name: "confirmPassword",
        control
    })
    const { isError, error } = useSelector(state => state.auth)
    useEffect(() => {
        if (password !== undefined && password !== "" && confirmPassword !== undefined && confirmPassword !== "" && password === confirmPassword) {

            setDisabled(false)
        }




    }, [password, confirmPassword])

    useEffect(() => {
        if (isError) {

            toast.error(error)
        }

    }, [isError, error])
    const onSubmit = data => {
        //console.log(password, confirmPassword)


        dispatch(createUser(data))
        reset()

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder='enter your email'  {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder='enter your password'  {...register("password")} />
            <input placeholder='confirm password'  {...register("confirmPassword")} />
            {/* errors will return when field validation fails  */}


            <input disabled={disabled} type="submit" />

        </form>
    );
};

export default SignUp;