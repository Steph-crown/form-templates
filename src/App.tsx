import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { useGetTemplatesFromState } from "./hooks/get-from-state";
import { getTheDataFromApi } from "./services";
import {
    setErrorGettingTemplate,
    setFormTemplates,
} from "./slices/form-templates.slice";
// import { useGetFormTemplatesQuery } from "./services";

function App() {
    // const { data, error, isLoading } = useGetFormTemplatesQuery();
    const dispatch = useDispatch();

    // Gets the length of template array from the state
    const templatesLength = useGetTemplatesFromState().lengthOfTemplates;

    // any errors getting data
    const errorGettingTemplates =
        useGetTemplatesFromState().errorGettingTemplates;

    const fetchData = async () => {
        try {
            const data = await getTheDataFromApi();
            setTimeFromLoad(0);
            // Takes out any error message
            dispatch(setErrorGettingTemplate(""));
            dispatch(setFormTemplates(data));
        } catch (error) {
            console.error(error);
            dispatch(
                setErrorGettingTemplate(
                    "An error occured while fetching the data. Please try again later. We'll make sure to fix this as soon as possible."
                )
            );

            // Try the request again
            fetchData();
        }
    };
    useMemo(() => {
        fetchData();
    }, []);

    const [timeFromLoad, setTimeFromLoad] = useState(0);
    useEffect(() => {
        let interval: number;
        if (templatesLength === 0) {
            interval = window.setInterval(() => {
                // increases the time from load by 1000 milliseconds (1 second) every second
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

    return (
        <section>
            {templatesLength === 0 ? (
                <p>Loading</p>
            ) : errorGettingTemplates ? (
                <p>{errorGettingTemplates}</p>
            ) : (
                <p>{templatesLength}</p>
            )}

            {/* Drops a message on the ui if the data has not been fetched after 14 seconds. For better user experience */}
            {!isOffline && !errorGettingTemplates && timeFromLoad > 14000 && (
                <p>
                    This is taking more than we anticipated. Hold on tight ...
                </p>
            )}

            {/* Drops a message if user is offline */}
            {String(isOffline)}
        </section>
    );
}

export default App;
