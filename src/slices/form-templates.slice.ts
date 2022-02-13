import { RootState } from "./../store/index";
import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./state.interface";

const initialState: IState = {
    templates: [
        {
            category: ["Education", "E-commerce"],
            created: "2022-02-13T13:29:26.282823",
            description: "irure proident, reprehenderit minim exercitation",
            link: "https://formpl.us/templates",
            name: "cillum magna",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.655061",
            description: "velit deserunt ullamco cillum ipsum",
            link: "https://formpl.us/templates",
            name: "elit, nostrud consectetur",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.680658",
            description: "officia laboris reprehenderit voluptate aliqua.",
            link: "https://formpl.us/templates",
            name: "voluptate eiusmod labore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.596495",
            description: "mollit elit, deserunt fugiat consectetur",
            link: "https://formpl.us/templates",
            name: "cillum culpa nulla",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.696107",
            description: "velit pariatur. irure deserunt aliquip",
            link: "https://formpl.us/templates",
            name: "proident, dolore incididunt",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.560880",
            description: "elit, aliquip deserunt culpa irure",
            link: "https://formpl.us/templates",
            name: "minim consequat. proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.629924",
            description: "labore Lorem minim voluptate consequat.",
            link: "https://formpl.us/templates",
            name: "dolore incididunt mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.605591",
            description: "minim occaecat incididunt pariatur. laboris",
            link: "https://formpl.us/templates",
            name: "cillum ullamco mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.656139",
            description: "reprehenderit occaecat Excepteur eiusmod ullamco",
            link: "https://formpl.us/templates",
            name: "consectetur elit, dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.675139",
            description: "Excepteur ullamco aliqua. veniam, exercitation",
            link: "https://formpl.us/templates",
            name: "laboris deserunt dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.737559",
            description: "exercitation officia incididunt pariatur. mollit",
            link: "https://formpl.us/templates",
            name: "veniam, commodo voluptate",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.781090",
            description: "consequat. exercitation consectetur Lorem dolor",
            link: "https://formpl.us/templates",
            name: "adipiscing Excepteur incididunt",
        },
        {
            category: ["Health", "E-commerce"],
            created: "2022-02-13T13:29:26.290057",
            description: "tempor dolore reprehenderit ipsum incididunt",
            link: "https://formpl.us/templates",
            name: "aliqua. culpa",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.808847",
            description: "eiusmod culpa fugiat velit occaecat",
            link: "https://formpl.us/templates",
            name: "officia veniam, Excepteur",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.759856",
            description: "veniam, consectetur commodo fugiat Excepteur",
            link: "https://formpl.us/templates",
            name: "adipiscing minim proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.570277",
            description: "consequat. cillum dolor officia velit",
            link: "https://formpl.us/templates",
            name: "mollit consequat. minim",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.696107",
            description: "velit pariatur. irure deserunt aliquip",
            link: "https://formpl.us/templates",
            name: "proident, dolore incididunt",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.560880",
            description: "elit, aliquip deserunt culpa irure",
            link: "https://formpl.us/templates",
            name: "minim consequat. proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.629924",
            description: "labore Lorem minim voluptate consequat.",
            link: "https://formpl.us/templates",
            name: "dolore incididunt mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.605591",
            description: "minim occaecat incididunt pariatur. laboris",
            link: "https://formpl.us/templates",
            name: "cillum ullamco mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.656139",
            description: "reprehenderit occaecat Excepteur eiusmod ullamco",
            link: "https://formpl.us/templates",
            name: "consectetur elit, dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.675139",
            description: "Excepteur ullamco aliqua. veniam, exercitation",
            link: "https://formpl.us/templates",
            name: "laboris deserunt dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.737559",
            description: "exercitation officia incididunt pariatur. mollit",
            link: "https://formpl.us/templates",
            name: "veniam, commodo voluptate",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.781090",
            description: "consequat. exercitation consectetur Lorem dolor",
            link: "https://formpl.us/templates",
            name: "adipiscing Excepteur incididunt",
        },
        {
            category: ["Health", "E-commerce"],
            created: "2022-02-13T13:29:26.290057",
            description: "tempor dolore reprehenderit ipsum incididunt",
            link: "https://formpl.us/templates",
            name: "aliqua. culpa",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.808847",
            description: "eiusmod culpa fugiat velit occaecat",
            link: "https://formpl.us/templates",
            name: "officia veniam, Excepteur",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.759856",
            description: "veniam, consectetur commodo fugiat Excepteur",
            link: "https://formpl.us/templates",
            name: "adipiscing minim proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.570277",
            description: "consequat. cillum dolor officia velit",
            link: "https://formpl.us/templates",
            name: "mollit consequat. minim",
        },
    ],
    lengthOfTemplates: 24,
    errorGettingTemplates: "",
    categoryFilter: "All",
    orderFilter: "Default",
    dateFilter: "Default",
    searchValue: "",
    displayedTemplates: [
        {
            category: ["Education", "E-commerce"],
            created: "2022-02-13T13:29:26.282823",
            description: "irure proident, reprehenderit minim exercitation",
            link: "https://formpl.us/templates",
            name: "cillum magna",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.655061",
            description: "velit deserunt ullamco cillum ipsum",
            link: "https://formpl.us/templates",
            name: "elit, nostrud consectetur",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.680658",
            description: "officia laboris reprehenderit voluptate aliqua.",
            link: "https://formpl.us/templates",
            name: "voluptate eiusmod labore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.596495",
            description: "mollit elit, deserunt fugiat consectetur",
            link: "https://formpl.us/templates",
            name: "cillum culpa nulla",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.696107",
            description: "velit pariatur. irure deserunt aliquip",
            link: "https://formpl.us/templates",
            name: "proident, dolore incididunt",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.560880",
            description: "elit, aliquip deserunt culpa irure",
            link: "https://formpl.us/templates",
            name: "minim consequat. proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.629924",
            description: "labore Lorem minim voluptate consequat.",
            link: "https://formpl.us/templates",
            name: "dolore incididunt mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.605591",
            description: "minim occaecat incididunt pariatur. laboris",
            link: "https://formpl.us/templates",
            name: "cillum ullamco mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.656139",
            description: "reprehenderit occaecat Excepteur eiusmod ullamco",
            link: "https://formpl.us/templates",
            name: "consectetur elit, dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.675139",
            description: "Excepteur ullamco aliqua. veniam, exercitation",
            link: "https://formpl.us/templates",
            name: "laboris deserunt dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.737559",
            description: "exercitation officia incididunt pariatur. mollit",
            link: "https://formpl.us/templates",
            name: "veniam, commodo voluptate",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.781090",
            description: "consequat. exercitation consectetur Lorem dolor",
            link: "https://formpl.us/templates",
            name: "adipiscing Excepteur incididunt",
        },
        {
            category: ["Health", "E-commerce"],
            created: "2022-02-13T13:29:26.290057",
            description: "tempor dolore reprehenderit ipsum incididunt",
            link: "https://formpl.us/templates",
            name: "aliqua. culpa",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.808847",
            description: "eiusmod culpa fugiat velit occaecat",
            link: "https://formpl.us/templates",
            name: "officia veniam, Excepteur",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.759856",
            description: "veniam, consectetur commodo fugiat Excepteur",
            link: "https://formpl.us/templates",
            name: "adipiscing minim proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.570277",
            description: "consequat. cillum dolor officia velit",
            link: "https://formpl.us/templates",
            name: "mollit consequat. minim",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.696107",
            description: "velit pariatur. irure deserunt aliquip",
            link: "https://formpl.us/templates",
            name: "proident, dolore incididunt",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.560880",
            description: "elit, aliquip deserunt culpa irure",
            link: "https://formpl.us/templates",
            name: "minim consequat. proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.629924",
            description: "labore Lorem minim voluptate consequat.",
            link: "https://formpl.us/templates",
            name: "dolore incididunt mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.605591",
            description: "minim occaecat incididunt pariatur. laboris",
            link: "https://formpl.us/templates",
            name: "cillum ullamco mollit",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.656139",
            description: "reprehenderit occaecat Excepteur eiusmod ullamco",
            link: "https://formpl.us/templates",
            name: "consectetur elit, dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.675139",
            description: "Excepteur ullamco aliqua. veniam, exercitation",
            link: "https://formpl.us/templates",
            name: "laboris deserunt dolore",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.737559",
            description: "exercitation officia incididunt pariatur. mollit",
            link: "https://formpl.us/templates",
            name: "veniam, commodo voluptate",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.781090",
            description: "consequat. exercitation consectetur Lorem dolor",
            link: "https://formpl.us/templates",
            name: "adipiscing Excepteur incididunt",
        },
        {
            category: ["Health", "E-commerce"],
            created: "2022-02-13T13:29:26.290057",
            description: "tempor dolore reprehenderit ipsum incididunt",
            link: "https://formpl.us/templates",
            name: "aliqua. culpa",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.808847",
            description: "eiusmod culpa fugiat velit occaecat",
            link: "https://formpl.us/templates",
            name: "officia veniam, Excepteur",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.759856",
            description: "veniam, consectetur commodo fugiat Excepteur",
            link: "https://formpl.us/templates",
            name: "adipiscing minim proident,",
        },
        {
            category: ["Health", "E-commerce", "Education"],
            created: "2022-02-13T13:29:26.570277",
            description: "consequat. cillum dolor officia velit",
            link: "https://formpl.us/templates",
            name: "mollit consequat. minim",
        },
    ],
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

            // Sets the templates displayed on the screen
            state.displayedTemplates = action.payload;
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
        },

        setDateFilter: (state, action: { payload: IState["dateFilter"] }) => {
            state.dateFilter = action.payload;
        },

        setOrderFilter: (state, action: { payload: IState["orderFilter"] }) => {
            state.orderFilter = action.payload;
        },

        setSearchValue: (state, action: { payload: IState["searchValue"] }) => {
            state.searchValue = action.payload;
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
} = formTemplatesSlice.actions;
export const formTemplatesSelector = (state: RootState) => state.formTemplates;

export default formTemplatesSlice.reducer;
