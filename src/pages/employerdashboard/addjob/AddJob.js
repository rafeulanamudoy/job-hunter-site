import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { usePostJobMutation } from '../../../features/job/jobApi';
import "./AddJob.css";

const AddJob = () => {
    const { register, handleSubmit, reset, control } = useForm();
    const { user: { email } } = useSelector(state => state.auth);

    const [postJob] = usePostJobMutation()






    const {
        fields: skillFields,
        append: skillAppend,
        remove: skillRemove,
    } = useFieldArray({ control, name: "skills" });

    const {

        fields: reqFields,
        append: reqAppend,
        remove: reqRemove
        ,


    } = useFieldArray({

        name: "requirements",
        control
    })

    const onSubmit = data => {

        console.log(data)
        postJob({ ...data, applicants: [], queries: [], directMessage: [], isOpen: true })



        reset()
    };

    return (
        <div>
            <h1>Add a new positon</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}

                <div>

                    <label htmlFor='postion'>
                        Postion
                    </label>
                    <input required {...register("postion")} />


                </div>
                <div>
                    <label htmlFor='comapnyName'>
                        company Name
                    </label>
                    <input required {...register("companyName")} />

                </div>
                <div>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input defaultValue={email} required {...register("email")} />

                </div>

                <div>
                    <label htmlFor='experience'>
                        Experience
                    </label>
                    <input   {...register("experience")} />

                </div>
                <div>
                    <label htmlFor='workLevel'>
                        Work Level
                    </label>
                    <input   {...register("workLevel")} />

                </div>
                <div>
                    <label htmlFor='employmentType'>
                        Employment Type
                    </label>
                    <input   {...register("employmentType")} />

                </div>
                <div>
                    <label htmlFor='salaryRange'>
                        Salary Range
                    </label>
                    <input   {...register("salaryRange")} />

                </div>
                <div>
                    <label htmlFor='location'>
                        Location
                    </label>
                    <input   {...register("location")} />

                </div>
                <div>
                    <label htmlFor='overView'>
                        Over View
                    </label>
                    <textarea  {...register("overView")} name="overView" cols="30" rows="10"></textarea>

                </div>

                <div>
                    <div>
                        <label htmlFor="skills">Skills</label>
                    </div>



                    <div>
                        <button
                            className="addField"
                            type='button'
                            onClick={() => skillAppend("")}

                        >
                            Add Skill
                        </button>
                    </div>
                    <div>
                        {skillFields.map((item, index) => {
                            return (
                                <div key={item.key} >
                                    <input
                                        className='!w-full'
                                        type='text'
                                        {...register(`skills.${index}`)}
                                    />
                                    <button
                                        type='button'
                                        onClick={() => skillRemove(index)}

                                    >
                                        delete

                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div>
                    <div>
                        <label htmlFor="req">Requirements</label>
                    </div>

                    <button
                        type='button'
                        className="addField"
                        onClick={() => reqAppend("")}

                    >
                        Add requirements
                    </button>
                    <div>
                        {

                            reqFields.map((item, index) => {
                                return (

                                    <div key={item.key}>

                                        <input type="text" {...register(`requirements.${index}`)} />

                                        <button type='button' onClick={() => reqRemove("")}>Remove</button>

                                    </div>
                                )


                            })


                        }
                    </div>
                </div>




                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default AddJob;