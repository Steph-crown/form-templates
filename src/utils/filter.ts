import { ITemplateData } from "../services/services.interface";

export const filterTemplatesBySearch = (
    templates: ITemplateData[],
    value: string
) => {
    return templates.filter((data) =>
        data.name.toLowerCase().startsWith(value.toLowerCase())
    );
};
