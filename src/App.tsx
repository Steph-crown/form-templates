import React from "react";
import "./App.css";
import { useGetFormTemplatesQuery } from "./services";

function App() {
    const { data, error, isLoading } = useGetFormTemplatesQuery();

    return (
        <section>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>{data.length}</>
            ) : null}
        </section>
    );
}

export default App;
