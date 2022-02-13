import { IThemeState } from "./../slices/theme-state.slice";
import { IState } from "./../slices/state.interface";
import { formTemplatesSelector } from "./../slices/form-templates.slice";
import { themeSelector } from "./../slices/theme-state.slice";
import { useAppSelector } from "./typed-hooks";
import { ITemplateData } from "../services/services.interface";

/**
 * Hook that gets the form templates from the redux store. Returns an array of form templates
 *  @returns {ITemplateData[]} the form templates
 */
export const useGetTemplatesFromState = (): IState => {
    return {
        lengthOfTemplates: useAppSelector(formTemplatesSelector)
            .lengthOfTemplates,
        errorGettingTemplates: useAppSelector(formTemplatesSelector)
            .errorGettingTemplates,
        displayedTemplates: useAppSelector(formTemplatesSelector)
            .displayedTemplates,
        categoryFilter: useAppSelector(formTemplatesSelector).categoryFilter,
        orderFilter: useAppSelector(formTemplatesSelector).orderFilter,
        dateFilter: useAppSelector(formTemplatesSelector).dateFilter,
        searchValue: useAppSelector(formTemplatesSelector).searchValue,
    };
};

/**
 * Hook that gets the current theme state from the redux store.
 *  @returns {IThemeState["theme"]} the form templates ("light" | "dark")
 */
export const useGetThemesFromState = (): IThemeState["theme"] => {
    return useAppSelector(themeSelector);
};
