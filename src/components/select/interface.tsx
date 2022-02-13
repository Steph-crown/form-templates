export interface ISelectProps {
    options: ISelectOption[];
    label: string;
    placeholder: string;
    disabled?: boolean;
    width?: string;
    handleChange: any;
    selectedItem: { label: string; value: string | number } | undefined;
    className?: string;
}

export interface ISelectOption {
    label: string;
    value: string;
}
