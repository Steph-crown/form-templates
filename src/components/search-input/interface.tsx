export interface ISearchInput {
    placeholder: string;
    value: string;
    name: string;
    width?: string;

    // Accepts a react change event and returns nothing
    handleChange?: (e: React.ChangeEvent<any>) => void;
}
