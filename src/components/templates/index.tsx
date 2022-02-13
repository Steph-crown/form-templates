import { FC } from "react";
import { useGetTemplatesFromState } from "../../hooks/get-from-state";
import { ITemplateData } from "../../services/services.interface";
import { TemplatesContainer } from "./templates.style";

export const Templates: FC = () => {
    const { displayedTemplates, lengthOfTemplates, categoryFilter } =
        useGetTemplatesFromState();

    return <TemplatesContainer></TemplatesContainer>;
};
