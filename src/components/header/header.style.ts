import { breakpoints } from "./../../consts/breakpoints";
import styled from "styled-components";
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3em 0;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.tablet}px) {
        margin: 2em 0;
    }
    @media (max-width: ${breakpoints.mobile}px) {
        margin: 1em 0;
    }
`;
