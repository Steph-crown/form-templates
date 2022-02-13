import { ITheme } from "./../styled-components/styles.interface";
import { breakpoints } from "./../../consts/breakpoints";
import styled from "styled-components";
export const HeaderContainer = styled.header<{
    showFilterForMobile: boolean;
    numberLabel: ITheme["numberLabel"];
    text: ITheme["text"];
}>`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 4.2em 0;
    flex-wrap: wrap;

    .search {
        display: flex;
        align-items: center;
        width: 25em;

        @media (max-width: ${breakpoints.mobile}px) {
            width: 100%;
        }

        button {
            margin-left: 1em;
        }
    }

    .filters {
        display: flex;
        align-items: flex-start;

        & > * {
            margin-left: 1.25em;
        }

        p {
            height: 45px;
            align-items: center;
            display: flex;
            font-size: 0.875em;
            color: ${({ numberLabel }) => numberLabel};
        }
    }

    .filter-icon {
        display: none;
    }

    @media (max-width: 1215px) {
        .filters {
            width: 100%;
            margin-top: 1em;
        }
    }

    @media (max-width: ${breakpoints.tablet}px) {
        margin: 2em 0;

        .filters {
            display: ${(props) =>
                props.showFilterForMobile ? "flex" : "none"};

            p {
                display: none;
            }

            label:first-of-type {
                margin-left: 0;
            }
        }
        .filter-icon {
            color: ${({ numberLabel }) => numberLabel};
            display: flex;
            width: 100%;
            justify-content: flex-end;
            margin-top: 1em;

            svg {
                cursor: pointer;

                &:hover {
                    color: ${({ text }) => text};
                }
            }
        }
    }
    @media (max-width: ${breakpoints.mobile}px) {
        margin: 1em 0;

        .search button {
            /* display: none; */
        }
    }
`;
