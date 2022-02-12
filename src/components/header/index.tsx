import { FC } from "react";
import { useDispatch } from "react-redux";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { IThemeState, updateTheme } from "../../slices/theme-state.slice";
import { HeaderContainer } from "./header.style";

/**
 * The header component containing search and filter
 */
export const Header: FC = () => {
    const dispatch = useDispatch();
    const theme: IThemeState["theme"] = useGetThemesFromState();

    const themeToggler = () => {
        // Updates the theme in state
        dispatch(updateTheme(theme === "light" ? "dark" : "light"));
    };
    return (
        <HeaderContainer>
            header
            <button onClick={themeToggler}>Change theme</button>
        </HeaderContainer>
    );
};
