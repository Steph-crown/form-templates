import { FC } from "react";
import { ITemplateData } from "../../services/services.interface";
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
    return (
        <TemplateCardContainer>
            <p>{name}</p>
        </TemplateCardContainer>
    );
};
