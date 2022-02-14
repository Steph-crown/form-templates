import { ITemplateData } from "../services/services.interface";

export interface IState {
    templates?: ITemplateData[];
    errorGettingTemplates?: string;
    displayedTemplates: ITemplateData[];
    dataBeforeSort?: ITemplateData[];

    // Current category displayed
    categoryFilter: "All" | "Education" | "E-commerce" | "Health";

    // Current alphabetical order filter
    orderFilter: "Default" | "Ascending" | "Descending";

    // Date filter
    dateFilter: "Default" | "Ascending" | "Descending";

    // Value entered in the search field
    searchValue: string;
}
