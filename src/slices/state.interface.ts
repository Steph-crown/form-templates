import { ITemplateData } from "../services/services.interface";

export interface IState {
    templates: ITemplateData[];
    lengthOfTemplates: number;
    errorGettingTemplates?: string;
}
