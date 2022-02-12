import { FC } from "react";
import { useDispatch } from "react-redux";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { IThemeState, updateTheme } from "../../slices/theme-state.slice";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { ModeToggleContainer } from "./toggle.style";

export const ModeToggle: FC = () => {
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    const dispatch = useDispatch();

    const themeToggler = () => {
        // Updates the theme in state
        dispatch(updateTheme(theme === "light" ? "dark" : "light"));
    };

    return (
        <ModeToggleContainer
            {...(theme === "light" ? lightTheme : darkTheme)}
            onClick={themeToggler}
        ></ModeToggleContainer>
    );
};
