import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useUserRegisterMutation } from '../../features/auth/authApi';



const CandidateRegistration = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user: { email } } = useSelector(state => state.auth);

    const [postUser] = useUserRegisterMutation()



    const onSubmit = data => {

        console.log(data)
        postUser({ ...data, role: "candidate" })

        reset()
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}

            <div>
                <label htmlFor='firstName'>
                    First Name
                </label>
                <input required {...register("firstName")} />

            </div>
            <div>
                <label htmlFor='lastName'>
                    Last Name
                </label>
                <input required {...register("lastName")} />

            </div>

            <div>
                <label htmlFor='email'>
                    Your Email
                </label>
                <input required defaultValue={email}  {...register("email")} />

            </div>


            <div>
                <label htmlFor='gender'>
                    Your Gender
                </label>
                <select  {...register("gender")} required name="gender">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>
            </div>

            <div>
                <label htmlFor='address'>
                    Address
                </label>
                <input required  {...register("address")} type="text" name="address" />
            </div>




            <div>
                <label htmlFor='divistion'>
                    Division
                </label>
                <input required {...register("division")} type="text" name="division" />
            </div>
            <div>
                <label htmlFor='district'>
                    District
                </label>
                <input required {...register("district")} type="text" name="district" />
            </div>
            <div>
                <label htmlFor='thana'>
                    Thana
                </label>
                <input required {...register("thana")} type="text" name="thana" />
            </div>

            <div>
                <label htmlFor='city'>
                    City
                </label>
                <input required {...register("city")} type="text" name="city" />
            </div>
            <div>

                <label htmlFor='postCode'>
                    Postal Code
                </label>
                <input type="postCode" name="postCode" />
            </div>
            <input required type="submit" />
        </form>
    );
};

export default CandidateRegistration;