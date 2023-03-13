import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({


        postJob: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/job",
                body: data
            }),
            invalidatesTags: ["Jobs"]
        }),
        apply: builder.mutation({
            query: (data) => ({
                method: "PATCH",
                url: "/apply",
                body: data
            }),

            invalidatesTags: ["Apply"]

        }),
        getJobs: builder.query({
            query: () => ({
                url: "/jobs"
            }),
            providesTags: ["Jobs"]

        }),
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`
            }),
            providesTags: ["Job"]
        }),

        getAppliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`
            })
        }),
        question: builder.mutation({
            query: (data) => ({
                method: "PATCH",
                url: "/query",
                body: data
            }),
            invalidatesTags: ["Job"]
        }),
        reply: builder.mutation({
            query: (data) => ({
                method: "PATCH",
                url: "/reply",
                body: data
            }),
            invalidatesTags: ["Job"]
        }),


        jobByEmail: builder.query({
            query: (email) => ({

                url: `/jobs/${email}`
            }),
            providesTags: ["Toggole"]

        }),
        toggolePosition: builder.mutation({
            query: (data) => ({
                method: "PATCH",
                url: "/toggolePos",
                body: data

            }),
            invalidatesTags: ["Toggole", "Jobs"]

        }),
        candidateInfo: builder.query({
            query: (email) => ({
                url: `/user/${email}`

            })
        }),
        filterByDate: builder.query({
            query: (email) => ({
                url: `/filterByDate/${email}`
            }),
            providesTags: ["Apply"]
        }),
        directMessage: builder.mutation({
            query: (data) => ({
                method: "PATCH",
                url: "/directMessage",
                body: data
            })
        }),
        getDirectMessage: (builder).query({

            query: ({ clientId, userId }) => ({

                url: `/yourMessage/${clientId}/${userId}`,

            }

            )
        })





    })
})

export const { usePostJobMutation, useGetJobsQuery, useJobByIdQuery, useApplyMutation, useGetAppliedJobsQuery, useQuestionMutation, useReplyMutation, useJobByEmailQuery, useToggolePositionMutation, useCandidateInfoQuery, useFilterByDateQuery, useDirectMessageMutation, useGetDirectMessageQuery } = jobApi

