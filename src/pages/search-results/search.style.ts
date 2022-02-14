import { breakpoints } from "./../../consts/breakpoints";
import styled from "styled-components";

export const SearchResultsContainer = styled.section`
    width: 83%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}px) {
        width: 85%;
    }

    @media (max-width: 400px) {
        width: 90%;
    }

    .info {
        background: #fff4ea;
        border-radius: 2px;
        margin-top: 4em;
        width: 100%;
        padding: 18px;
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 500;
        font-size: 0.875em;
        line-height: 22px;
        text-align: center;

        color: #252525;
        text-align: left;

        svg {
            margin-right: 1.5em;

            min-height: 16px;
            min-width: 16px;
        }

        @media (max-width: ${breakpoints.mobile}px) {
            margin-top: 2em;
        }
        @media (max-width: 400px) {
            flex-direction: column;
            align-items: flex-start;

            svg {
                margin-bottom: 1em;
            }
        }
    }
`;
