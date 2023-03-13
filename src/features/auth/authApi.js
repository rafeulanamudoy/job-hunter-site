import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        userRegister: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/user",
                body: data
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    //console.log(res)
                    dispatch(getUser(data.email))
                } catch (error) {

                }
            }
        })
    })
})

export const { useUserRegisterMutation } = authApi