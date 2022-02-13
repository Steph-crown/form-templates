import { RootState } from "../store/index";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Interface for the value of the current theme
 */
export interface IThemeState {
    theme: "light" | "dark";
}

const initialState: IThemeState = {
    // If theme is saved in local storage as dark, use it, else use light
    theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,

    reducers: {
        // Update the theme based on the current theme state
        updateTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const { updateTheme } = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
