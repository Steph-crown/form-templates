import { ITheme } from "./../styled-components/styles.interface";
import { breakpoints } from "./../../consts/breakpoints";
import styled from "styled-components";
export const HeaderContainer = styled.header`
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
            color: ${({ numberLabel }: ITheme) => numberLabel};
        }
    }

    @media (max-width: ${breakpoints.tablet}px) {
        margin: 2em 0;
    }
    @media (max-width: ${breakpoints.mobile}px) {
        margin: 1em 0;

        .search button {
            display: none;
        }

        .filters {
            display: none;
        }
    }
`;
