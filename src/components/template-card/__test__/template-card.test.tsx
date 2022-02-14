import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { TemplateCard } from "..";
import { store } from "../../../store";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ITemplateData } from "../../../services/services.interface";

afterEach(cleanup);
const testData: ITemplateData = {
    name: "A template",
    created: "2022-02-14T17:42:11.521444",
    category: ["Education"],
    description: "A template for education",
    link: "https://www.google.com",
};

// Tests that the component renders without crashing
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <TemplateCard {...testData} />
        </Provider>,
        div
    );
});

// Checks if the name rendered is correct
it("renders template name correctly", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <TemplateCard {...testData} />
        </Provider>
    );
    expect(getByTestId("template-name")).toHaveTextContent("A template");
});

// Checks snapshot of the component.
it("matches snapshot", () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <TemplateCard {...testData} />{" "}
            </Provider>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
