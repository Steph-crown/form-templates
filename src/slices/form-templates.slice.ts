import { RootState } from "./../store/index";
import { createSlice } from "@reduxjs/toolkit";
import { ITemplateData } from "./../services/services.interface";

const initialState: ITemplateData[] = [];

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
            state = action.payload;
        },
    },
});

export const { setFormTemplates } = formTemplatesSlice.actions;
export const formTemplatesSelector = (state: RootState) => state.formTemplates;

export default formTemplatesSlice.reducer;
