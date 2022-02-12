import { RootState } from "../store/index";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Interface for the value of the current theme
 */
export interface IThemeState {
    theme: "light" | "dark";
}

const initialState: IThemeState = {
    theme: "light",
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
