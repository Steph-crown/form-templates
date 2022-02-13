import { FC } from "react";
import {
    useGetTemplatesFromState,
    useGetThemesFromState,
} from "../../hooks/get-from-state";
import { IThemeState } from "../../slices/theme-state.slice";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { TemplateCard } from "../template-card";
import { TemplatesContainer } from "./templates.style";

export const Templates: FC = () => {
    const { displayedTemplates, lengthOfTemplates, categoryFilter } =
        useGetTemplatesFromState();

    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    return (
        <TemplatesContainer {...(theme === "light" ? lightTheme : darkTheme)}>
            <aside>
                <p>{categoryFilter} Templates</p>
                <small>{lengthOfTemplates} templates</small>
            </aside>
            <main>
                <ul>
                    {/* The templates displayed */}
                    {displayedTemplates.map((template) => (
                        <TemplateCard {...template} key={template.name} />
                    ))}
                </ul>
            </main>
        </TemplatesContainer>
    );
};
