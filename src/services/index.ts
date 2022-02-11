import { ITemplateData } from "./services.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api-url";

/**
 * API slice
 */
export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),

    endpoints: (bulder) => ({
        // Get all templates
        getFormTemplates: bulder.query<ITemplateData[], void>({
            query: () => ({ url: "", method: "GET" }),
        }),
    }),
});

export const { useGetFormTemplatesQuery } = api;
