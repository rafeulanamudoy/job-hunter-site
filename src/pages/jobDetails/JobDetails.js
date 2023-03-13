import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useApplyMutation, useJobByIdQuery, useQuestionMutation, useReplyMutation } from '../../features/job/jobApi';

const JobDetails = () => {
    const [reply, setReply] = useState("")
    const { id } = useParams()

    const { data } = useJobByIdQuery(id, { pollingInterval: 1000 });
    const [toggole, setToggole] = useState(false)
    const { postion, _id, queries, applicants } = data?.data || {};
    const [apply] = useApplyMutation();
    const [sendQuestion] = useQuestionMutation()
    const [sendReply] = useReplyMutation()

    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {

        if (applicants?.filter(item => item.email === user?.email).length > 0) {
            setToggole(true)
        }
    }, [applicants, user.email])

    const handleApply = () => {

        if (user.role === "employer") {
            toast.error("you need a candidate account ")
            return
        }

        if (user.role === "") {

            navigate("/register")
            return

        }
        const data = {
            userId: user._id,
            email: user.email,
            jobId: _id,
            appliedDate: new Date().toString()

        }
        apply(data)
            .unwrap()
            .then(() => {

                //  console.log(payload)
                toast.success("successfullt applied")
                setToggole(true)
            })
            .catch(error => console.log("error"))
    }

    const handleQuestion = (data) => {
        console.log(data)
        const queryData = {
            ...data,
            userId: user._id,
            email: user.email,
            jobId: _id
        }
        sendQuestion(queryData)
        reset()
    }
    const handleReply = (id) => {
        const data = {
            reply, userId: id
        }
        console.log(data)
        sendReply(data)
    }

    return (
        <div>
            <h1>this is job details</h1>

            <h1>{postion}</h1>
            <Button disabled={toggole} onClick={handleApply}>apply</Button>
            {
                queries?.map(({ question, email, reply, id }) => (
                    <>
                        <small>{email}</small>
                        <h1>{question}</h1>
                        {
                            reply?.map((item) => (
                                <p>{item}</p>
                            ))
                        }
                        {

                            user.role === "employer" &&

                            <div >
                                <input placeholder='Reply' type='text'
                                    onBlur={(e) => setReply(e.target.value)}
                                />
                                <button onClick={() => handleReply(id)} type='button'>
                                    reply

                                </button>
                            </div>


                        }
                    </>


                ))
            }


            {
                user.role === "candidate" && <form onSubmit={handleSubmit(handleQuestion)}>

                    <div className='flex gap-3 my-5'>
                        <input
                            {...register("question")}
                            placeholder='Ask a question...'
                            type='text'
                            className='w-full'
                        />
                        <button type='submit'>
                            ask
                        </button>
                    </div>
                </form>
            }
        </div>
    );
};

export default JobDetails;