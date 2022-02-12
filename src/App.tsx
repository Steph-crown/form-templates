import "./App.css";
import GlobalStyle from "./components/styled-components/globalStyles";
import { darkTheme, lightTheme } from "./components/styled-components/themes";
import { Pages } from "./routes";

function App() {
    return (
        <section>
            <GlobalStyle {...darkTheme} />
            <Pages />
        </section>
    );
}

export default App;
