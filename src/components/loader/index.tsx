import { FC } from "react";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { IThemeState } from "../../slices/theme-state.slice";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { LoaderContainer } from "./loader.style";

/**
 * Loader for showing the delay in fetching data
 */
export const Loader: FC = () => {
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();
    return (
        <LoaderContainer {...(theme === "light" ? lightTheme : darkTheme)}>
            {/* <div className="spinner-wrapper"> */}
            <div className="spinner">
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
                {/* </div> */}
            </div>
        </LoaderContainer>
    );
};
