export interface ISearchInput {
    placeholder: string;
    value: string;
    name: string;
    width?: string;

    // Accepts a react change event and returns nothing
    handleChange?: (e: React.ChangeEvent<any>) => void;

    // Clears the content of the input
    handleClear: (e: React.ChangeEvent<any>) => void;
}
