import { FC } from "react";
import { PaginationContainer } from "./styles";
import { PaginationData, usePagination } from "../../hooks/usePagination";
import { useGetThemesFromState } from "../../hooks/get-from-state";
import { IThemeState } from "../../slices/theme-state.slice";
import { darkTheme, lightTheme } from "../styled-components/themes";

interface IPagination extends PaginationData {
    onPageChange: (page: number) => void;
    className?: string;
}

export const Pagination: FC<IPagination> = ({
    onPageChange,
    totalNumberOfData,
    siblingCount = 1,
    currentPage,
    dataPerPage,
    className,
}) => {
    // Gets current theme from state
    const theme: IThemeState["theme"] = useGetThemesFromState();

    const paginationRange = usePagination({
        currentPage,
        totalNumberOfData,
        siblingCount,
        dataPerPage,
    });

    if (currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange![paginationRange!.length - 1];

    return (
        <PaginationContainer {...(theme === "light" ? lightTheme : darkTheme)}>
            <li className={`pagination__item`}>
                <button
                    onClick={onPrevious}
                    className="pagination__item-prev"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
            </li>
            <div className="pagination__item-page-details">
                <span className="current-page">{currentPage}</span>{" "}
                <span className="">
                    of {Math.ceil(totalNumberOfData / dataPerPage)}
                </span>
            </div>

            <li className="pagination__item">
                <button
                    onClick={onNext}
                    className="pagination__item-next"
                    disabled={currentPage === lastPage}
                >
                    Next
                </button>
            </li>
        </PaginationContainer>
    );
};
