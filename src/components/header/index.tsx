import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { IThemeState, updateTheme } from "../../slices/theme-state.slice";
import { SearchInput } from "../search-input";
import { Select } from "../select";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { ModeToggle } from "../toggle";
import { HeaderContainer } from "./header.style";

/**
 * The header component containing search and filter
 */
export const Header: FC = () => {
    const dispatch = useDispatch();
    const theme: IThemeState["theme"] = useGetThemesFromState();

    const [current, setCurrent] = useState<{ label: string; value: string }>({
        label: "Adekunle",
        value: "adekunle",
    });

    const options: { label: string; value: string }[] = [
        { label: "Adekunle", value: "adekunle" },
        { label: "Bolaji", value: "popi" },
        { label: "Koloadde", value: "lool" },
    ];

    return (
        <HeaderContainer {...(theme === "light" ? lightTheme : darkTheme)}>
            <section className="search">
                {" "}
                <SearchInput
                    placeholder="Search Templates"
                    value=""
                    name="Search"
                />
                <ModeToggle />
            </section>

            <section className="filters">
                <p>Sort By:</p>
                <Select
                    options={options}
                    placeholder="Category"
                    label="Category"
                    width="100%"
                    selectedItem={current}
                    handleChange={(item: { label: string; value: string }) => {
                        setCurrent(item);
                        return null;
                    }}
                />{" "}
                <Select
                    options={options}
                    placeholder="Order"
                    label="Order"
                    width="100%"
                    selectedItem={current}
                    handleChange={(item: { label: string; value: string }) => {
                        setCurrent(item);
                        return null;
                    }}
                />{" "}
                <Select
                    options={options}
                    placeholder="Date"
                    label="Date"
                    width="100%"
                    selectedItem={current}
                    handleChange={(item: { label: string; value: string }) => {
                        setCurrent(item);
                        return null;
                    }}
                />{" "}
            </section>
        </HeaderContainer>
    );
};
