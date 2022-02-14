import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { TemplateCard } from "..";
import { store } from "../../../store";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <TemplateCard
                name="A template"
                created="2022-02-14T17:42:11.521444"
                category={["Education"]}
                description="A template for education"
                link="https://www.google.com"
            />
        </Provider>,
        div
    );
});
