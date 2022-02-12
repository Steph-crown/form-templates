import { IState } from "./../slices/state.interface";
import { formTemplatesSelector } from "./../slices/form-templates.slice";
import { useAppSelector } from "./typed-hooks";
import { ITemplateData } from "../services/services.interface";

/**
 * Hook that gets the form templates from the redux store. Returns an array of form templates
 *  @returns {ITemplateData[]} the form templates
 */
export const useGetTemplatesFromState = (): IState => {
    return {
        templates: useAppSelector(formTemplatesSelector).templates,
        lengthOfTemplates: useAppSelector(formTemplatesSelector)
            .lengthOfTemplates,
        errorGettingTemplates: useAppSelector(formTemplatesSelector)
            .errorGettingTemplates,
    };
};