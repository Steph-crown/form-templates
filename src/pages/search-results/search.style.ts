import { breakpoints } from "./../../consts/breakpoints";
import styled from "styled-components";

export const SearchResultsContainer = styled.section`
    width: 83%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}px) {
        width: 90%;
    }
`;
