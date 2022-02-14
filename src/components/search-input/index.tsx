import { FC } from "react";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { IThemeState } from "../../slices/theme-state.slice";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { ISearchInput } from "./interface";
import { SearchInputContainer } from "./style";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search.svg";
import { ReactComponent as CloseIcon } from "./../../assets/icons/close.svg";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../slices/form-templates.slice";

export const SearchInput: FC<ISearchInput> = ({
    placeholder,
    name,
    handleChange,
    value,
    handleClear,
    valueFromState,
}) => {
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    const dispatch = useDispatch();

    return (
        <SearchInputContainer {...(theme === "light" ? lightTheme : darkTheme)}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={(ev) => {
                    dispatch(setSearchText(ev.target.value));
                    handleChange(ev);
                }}
                id={name}
                value={value}
            />
            {value === "" ? (
                <SearchIcon />
            ) : (
                <CloseIcon onClick={handleClear} />
            )}
        </SearchInputContainer>
    );
};
