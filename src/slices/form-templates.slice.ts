import { sortTemplatesByDate, sortTemplatesByNameOrder } from "./../utils/sort";
import { RootState } from "./../store/index";
import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./state.interface";
import { filterTemplatesBySearch } from "../utils/filter";

const initialState: IState = {
    templates: [],

    errorGettingTemplates: "",
    categoryFilter: "All",
    orderFilter: "Default",
    dateFilter: "Default",
    searchValue: "",

    // This is used to store the data before any sort, so if the sort is cleared, the unsorted data is used
    dataBeforeSort: [],
    displayedTemplates: [],
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

            // Sets the templates displayed on the screen
            state.displayedTemplates = action.payload;

            // sets default data
            state.dataBeforeSort = action.payload;
        },

        // Set the error getting the form templates
        setErrorGettingTemplate: (state, action) => {
            state.errorGettingTemplates = action.payload;
        },

        setCategoryFilter: (
            state,
            action: { payload: IState["categoryFilter"] }
        ) => {
            state.categoryFilter = action.payload;

            // Resets all other filters and search value
            state.dateFilter = "Default";
            state.orderFilter = "Default";
            state.searchValue = "";

            // sets the new displayed data as those of the selected category
            if (state.templates) {
                // all
                if (action.payload === "All") {
                    state.displayedTemplates = state?.templates;
                    state.dataBeforeSort = state.templates;
                }
                // not all
                else {
                    const newTemplates = state.templates?.filter((template) =>
                        template.category.includes(action.payload)
                    );

                    state.displayedTemplates = newTemplates;
                    state.dataBeforeSort = newTemplates;
                }
            }
        },

        setDateFilter: (state, action: { payload: IState["dateFilter"] }) => {
            state.dateFilter = action.payload;
            state.orderFilter = "Default";

            if (action.payload === "Default" && state.dataBeforeSort) {
                // Go back to unsorted data
                state.displayedTemplates = state.dataBeforeSort;
            } else {
                const sorted = sortTemplatesByDate(
                    state.displayedTemplates,
                    action.payload
                );
                state.displayedTemplates = sorted;
            }
        },

        setOrderFilter: (state, action: { payload: IState["orderFilter"] }) => {
            state.orderFilter = action.payload;
            state.dateFilter = "Default";

            if (action.payload === "Default" && state.dataBeforeSort) {
                // Go back to unsorted data
                state.displayedTemplates = state.dataBeforeSort;
            } else {
                const sorted = sortTemplatesByNameOrder(
                    state.displayedTemplates,
                    action.payload
                );
                state.displayedTemplates = sorted;
            }
        },

        setSearchText: (state, action: { payload: IState["searchValue"] }) => {
            state.searchValue = action.payload;
        },

        setSearchValue: (state, action: { payload: IState["searchValue"] }) => {
            if (state.dataBeforeSort) {
                if (action.payload === "") {
                    state.displayedTemplates = state.dataBeforeSort;
                } else {
                    state.displayedTemplates = filterTemplatesBySearch(
                        state.dataBeforeSort,
                        action.payload
                    );
                }
            }
        },
    },
});

export const {
    setFormTemplates,
    setErrorGettingTemplate,
    setCategoryFilter,
    setOrderFilter,
    setDateFilter,
    setSearchValue,
    setSearchText,
} = formTemplatesSlice.actions;
export const formTemplatesSelector = (state: RootState) => state.formTemplates;

export default formTemplatesSlice.reducer;
