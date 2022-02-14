import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../../components/header";
import {
    useGetTemplatesFromState,
    useGetThemesFromState,
} from "../../hooks/get-from-state";
import { getTheDataFromApi } from "../../services";
import {
    setErrorGettingTemplate,
    setFormTemplates,
} from "../../slices/form-templates.slice";
import { SearchResultsContainer } from "./search.style";
import { ReactComponent as InfoIcon } from "./../../assets/icons/info.svg";
import { Templates } from "../../components/templates";
import { Loader } from "../../components/loader";
import { IThemeState } from "../../slices/theme-state.slice";
import {
    darkTheme,
    lightTheme,
} from "../../components/styled-components/themes";

export const SearchResults: FC = () => {
    const dispatch = useDispatch();

    // Gets the length of template array from the state
    const templates = useGetTemplatesFromState().displayedTemplates;

    // any errors getting data
    const errorGettingTemplates =
        useGetTemplatesFromState().errorGettingTemplates;

    // Loading while data fetching
    const [loading, setLoading] = useState<boolean>(true);
    const fetchData = async () => {
        dispatch(setErrorGettingTemplate(""));
        try {
            const data = await getTheDataFromApi();
            setTimeFromLoad(0);
            // Takes out any error message
            dispatch(setErrorGettingTemplate(""));
            dispatch(setFormTemplates(data));
            setLoading(false);
        } catch (error) {
            console.error(error);
            dispatch(
                setErrorGettingTemplate(
                    "An error occured while fetching the data. Please try again later. We'll make sure to fix this as soon as possible."
                )
            );

            // Try the request again
            setTimeout(() => {
                fetchData();
            }, 2000);
        }
    };
    useMemo(() => {
        fetchData();
    }, []);

    // COunts the amount of time since page load
    const [timeFromLoad, setTimeFromLoad] = useState(0);
    useEffect(() => {
        let interval: number;
        if (templates.length === 0) {
            interval = window.setInterval(() => {
                setTimeFromLoad(timeFromLoad + 1000);
            }, 1000);
        }

        return () => {
            // clear the interval when the component unmounts
            window.clearInterval(interval);
        };
    }, [timeFromLoad]);

    // Checks if network is offline
    const [isOffline, setIsOffline] = useState(false);
    useEffect(() => {
        window.navigator.onLine ? setIsOffline(false) : setIsOffline(true);
    });
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    return (
        <SearchResultsContainer
            {...(theme === "light" ? lightTheme : darkTheme)}
        >
            <Header />
            <aside className="info">
                <InfoIcon />
                Tada! Get started with a free template. Can't find what you are
                looking for? Search from the 1000+ available templates
            </aside>
            <Templates {...{ loading }} />
            {/* Loading */}
            {loading && templates.length === 0 && <Loader />}

            {/* Error occured that is not network error */}
            {errorGettingTemplates && !isOffline && (
                <p className="error-text">{errorGettingTemplates}</p>
            )}

            {/* Drops a message on the ui if the data has not been fetched after 14 seconds and network is online and there is no error. For better user experience */}
            {!isOffline &&
                !errorGettingTemplates &&
                timeFromLoad > 14000 &&
                loading &&
                templates.length === 0 && (
                    <p className="error-text">
                        This is taking more than we anticipated. Hold on tight
                        ...
                    </p>
                )}

            {/* Drops a message if user is offline and loading data */}
            {isOffline && loading && templates.length === 0 && (
                <p className="error-text">No internet connection</p>
            )}
        </SearchResultsContainer>
    );
};
