import { FC, useEffect, useState } from "react";
import {
    useGetTemplatesFromState,
    useGetThemesFromState,
} from "../../hooks/get-from-state";
// import { ITemplateData } from "../../services/services.interface";
import { IThemeState } from "../../slices/theme-state.slice";
import { getRangeOfData } from "../../utils/getRangeOfData";
import { Pagination } from "../Pagination/Index";
import { darkTheme, lightTheme } from "../styled-components/themes";
import { TemplateCard } from "../template-card";
import { TemplatesContainer } from "./templates.style";
import { ReactComponent as EmptyBox } from "./../../assets/icons/empty-box.svg";
export const dataPerPage = 15;

export const Templates: FC<{ loading: boolean }> = ({ loading }) => {
    const { displayedTemplates, categoryFilter } = useGetTemplatesFromState();

    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    // const [data, setData] = useState<ITemplateData[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);

    let shownData = getRangeOfData(
        displayedTemplates,
        currentPage,
        dataPerPage
    );

    // Allows the pagination to restart if the displayed data is updated
    useEffect(() => {
        setCurrentPage(1);
    }, [displayedTemplates]);

    return (
        <TemplatesContainer {...(theme === "light" ? lightTheme : darkTheme)}>
            <aside>
                <p>{categoryFilter} Templates</p>
                <small>{displayedTemplates.length} templates</small>
            </aside>
            <main>
                <ul>
                    {/* The templates displayed */}
                    {displayedTemplates.length > 0 &&
                        shownData.map((template, index) => (
                            <TemplateCard
                                {...template}
                                key={template.name + index}
                            />
                        ))}
                </ul>

                {/* If not loading and no templates. I.e. the filter has no value */}
                {displayedTemplates.length === 0 && !loading && (
                    <div className="empty">
                        <EmptyBox className="empty__icon" />
                        <h3>No templates</h3>
                        <p>Looks like there is no available template </p>
                    </div>
                )}

                <Pagination
                    currentPage={currentPage}
                    dataPerPage={dataPerPage}
                    totalNumberOfData={displayedTemplates.length}
                    // siblingCount={0}
                    onPageChange={(page: number) => {
                        setCurrentPage(page);
                    }}
                />
            </main>
        </TemplatesContainer>
    );
};
