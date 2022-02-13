import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
    CATEGORY_FILTERS,
    DATE_FILTER,
    ORDER_FILTER,
} from "../../consts/filters";
import {
    useGetTemplatesFromState,
    useGetThemesFromState,
} from "../../hooks/get-from-state";
import {
    setCategoryFilter,
    setDateFilter,
    setOrderFilter,
    setSearchValue,
} from "../../slices/form-templates.slice";
import { IState } from "../../slices/state.interface";
import { IThemeState } from "../../slices/theme-state.slice";
import { SearchInput } from "../search-input";
import { Select } from "../select";
import { ISelectOption } from "../select/interface";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { ModeToggle } from "../toggle";
import { HeaderContainer } from "./header.style";
import { ReactComponent as FilterIcon } from "./../../assets/icons/filter.svg";

/**
 * The header component containing search and filter
 */
export const Header: FC = () => {
    const dispatch = useDispatch();
    const theme: IThemeState["theme"] = useGetThemesFromState();

    // Initial filters
    const { categoryFilter, dateFilter, orderFilter, searchValue } =
        useGetTemplatesFromState();

    // maps the possible filter values into a format suitable for Select option
    const categoryFilterOptions: ISelectOption[] = CATEGORY_FILTERS.map(
        (filter) => ({
            label: filter,
            value: filter,
        })
    );

    const dateFilterOptions: ISelectOption[] = DATE_FILTER.map((filter) => ({
        label: filter,
        value: filter,
    }));

    const orderFilterOptions: ISelectOption[] = ORDER_FILTER.map((filter) => ({
        label: filter,
        value: filter,
    }));

    const [showFilterForMobile, setShowFilterForMobile] =
        useState<boolean>(false);

    return (
        <HeaderContainer
            {...(theme === "light" ? lightTheme : darkTheme)}
            showFilterForMobile={showFilterForMobile}
        >
            <section className="search">
                {" "}
                <SearchInput
                    placeholder="Search Templates"
                    value={searchValue}
                    handleChange={(ev) => {
                        dispatch(setSearchValue(ev.target.value));
                    }}
                    name="Search"
                    // Clears the search value from state
                    handleClear={(ev) => {
                        dispatch(setSearchValue(""));
                    }}
                />
                <ModeToggle />
            </section>
            <div className="filter-icon">
                <FilterIcon
                    onClick={() => {
                        setShowFilterForMobile((prev) => !prev);
                    }}
                />
            </div>
            <section className="filters">
                <p>Sort By:</p>
                <Select
                    options={categoryFilterOptions}
                    placeholder="Category"
                    label="Category"
                    width="100%"
                    selectedItem={{
                        label: categoryFilter,
                        value: categoryFilter,
                    }}
                    handleChange={(item: { label: string; value: string }) => {
                        // Sets the selected category filter to state
                        dispatch(
                            setCategoryFilter(
                                item.value as IState["categoryFilter"]
                            )
                        );
                        return null;
                    }}
                />{" "}
                <Select
                    options={orderFilterOptions}
                    placeholder="Order"
                    label="Order"
                    width="100%"
                    selectedItem={{
                        label: orderFilter,
                        value: orderFilter,
                    }}
                    handleChange={(item: { label: string; value: string }) => {
                        dispatch(
                            setOrderFilter(item.value as IState["orderFilter"])
                        );
                        return null;
                    }}
                />{" "}
                <Select
                    options={dateFilterOptions}
                    placeholder="Date"
                    label="Date"
                    width="100%"
                    selectedItem={{
                        label: dateFilter,
                        value: dateFilter,
                    }}
                    handleChange={(item: { label: string; value: string }) => {
                        dispatch(
                            setDateFilter(item.value as IState["dateFilter"])
                        );
                        return null;
                    }}
                />{" "}
            </section>
        </HeaderContainer>
    );
};
