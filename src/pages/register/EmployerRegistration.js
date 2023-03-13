import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useUserRegisterMutation } from '../../features/auth/authApi';


const EmployerRegistration = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user: { email } } = useSelector(state => state.auth);

    const [postUser] = useUserRegisterMutation()
    const employeeRange = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];
    const onSubmit = data => {

        console.log(data)
        postUser({ ...data, role: "employer" })

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
            <div className='flex flex-col w-full max-w-xs'>
                <label className='mb-3' for='employeeRange'>
                    Number of employee
                </label>
                <select {...register("employeeRange")} id='employeeRange'>
                    {employeeRange
                        .sort((a, b) => a.localeCompare(b))
                        .map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                </select>
            </div>
            <div>
                <label htmlFor='position'>
                    company Position
                </label>
                <input  {...register("position")} type="text" name="position" id="" />
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

export default EmployerRegistration;