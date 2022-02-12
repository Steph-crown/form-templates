import { RootState } from "./../store/index";
import { createSlice } from "@reduxjs/toolkit";
import { ITemplateData } from "./../services/services.interface";
import { IState } from "./state.interface";

const initialState: IState = {
    templates: [],
    lengthOfTemplates: 0,
    errorGettingTemplates: "",
};

/**
 * Reducer slice for form templates.
 * @type {string}
 */
export const formTemplatesSlice = createSlice({
    name: "formTemplates",
    initialState,
    reducers: {
        // Update the form templates
        setFormTemplates: (state, action) => {
            state.templates = action.payload;
            state.lengthOfTemplates = action.payload.length;
        },

        // Set the error getting the form templates
        setErrorGettingTemplate: (state, action) => {
            state.errorGettingTemplates = action.payload;
        },
    },
});

export const { setFormTemplates, setErrorGettingTemplate } =
    formTemplatesSlice.actions;
export const formTemplatesSelector = (state: RootState) => state.formTemplates;

export default formTemplatesSlice.reducer;
