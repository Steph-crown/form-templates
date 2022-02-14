import { FC } from "react";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { ITemplateData } from "../../services/services.interface";
import { IThemeState } from "../../slices/theme-state.slice";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { TemplateCardContainer } from "./template-card.style";

/**
 * Single template card
 */
export const TemplateCard: FC<ITemplateData> = ({
    name,
    created,
    category,
    link,
    description,
}) => {
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    return (
        <TemplateCardContainer
            {...(theme === "light" ? lightTheme : darkTheme)}
        >
            <div>
                <h2 data-testid="template-name">{name}</h2>
                <p>{description}</p>
            </div>
            <button>Use Template</button>
        </TemplateCardContainer>
    );
};
