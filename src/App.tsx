import "./App.css";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./components/styled-components/globalStyles";
import { darkTheme, lightTheme } from "./components/styled-components/themes";
import { Pages } from "./routes";
import { IThemeState } from "./slices/theme-state.slice";
import { useGetThemesFromState } from "./hooks/get-from-state";

function App() {
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();
    return (
        // Provider is used to pass the theme to all components
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <GlobalStyle
                    {...(theme === "light" ? lightTheme : darkTheme)}
                />
                <Pages />
            </>
        </ThemeProvider>
    );
}

export default App;
