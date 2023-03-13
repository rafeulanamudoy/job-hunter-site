import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { useCandidateInfoQuery, useDirectMessageMutation, useGetDirectMessageQuery } from '../../features/job/jobApi';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import "./DirectMessage.css";
import { skipToken } from '@reduxjs/toolkit/dist/query';

const DirectMessage = () => {
    const { email } = useParams()

    // console.log(email)
    const { data } = useCandidateInfoQuery(email);


    const { _id: userId } = useSelector(state => state?.auth?.user)
    const { _id: clientId, email: clientEmail } = data?.data || {};
    const [directMessage] = useDirectMessageMutation()
    const { data: userMessage } = useGetDirectMessageQuery(clientId && userId ? { clientId, userId } : skipToken, { pollingInterval: 1000 })
    const { data: clientMessage } = useGetDirectMessageQuery(clientId && userId ? { clientId: userId, userId: clientId } : skipToken, { pollingInterval: 1000 })



    const allMessages = useMemo(() => {
        let messages;

        if (userMessage?.data[0]?.messages?.length > 0 && clientMessage?.data[0]?.messages?.length === 0) {
            messages = [...userMessage?.data[0]?.messages[0]?.message]
            return messages
        }
        else if (clientMessage?.data[0]?.messages?.length > 0 && userMessage?.data[0]?.messages?.length === 0) {
            messages = [...clientMessage?.data[0]?.messages[0]?.message]
            return messages
        }
        else if (clientMessage?.data[0]?.messages?.length > 0 && userMessage?.data[0]?.messages?.length > 0) {
            messages = userMessage?.data[0]?.messages[0]?.message.concat(clientMessage?.data[0]?.messages[0]?.message)
            return messages

        }

        //  messages = userMessage?.data[0]?.messages[0]?.message.concat(clientMessage?.data[0]?.messages[0]?.message || {})








    }, [userMessage, clientMessage])




    const { register, handleSubmit, reset } = useForm();


    const onSubmit = ({ message }) => {
        console.log(message)
        const sendTime = new Date().toString()
        const data = {
            userId,
            clientId,
            clientEmail,
            sendTime,
            message

        }
        directMessage(data)
            .unwrap()
            .then(() => {
                toast.success(`successfully send the message`);
                reset()
            })
            .catch(error => toast.error(error))
    };





    return (
        <div>
            <h1>this is direct message</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input {...register("message")} type="text" placeholder='Direct Message' />
                <button type="submit" >Message</button>

            </form>

            <div>

                {
                    allMessages?.sort((a, b) => {
                        return new Date(a.sendTime) - new Date(b.sendTime)
                    })?.map(message => <div key={Math.floor((1 + Math.random()) * 0x10000)}>
                        <h1>{message?.message}</h1>
                        <p>{message?.sendTime}</p>
                        <p></p>
                    </div>)

                }
                {
                    console.log(allMessages)
                }

            </div>

        </div>
    );
};

export default DirectMessage;