import { breakpoints } from "./../../consts/breakpoints";
import { ITheme } from "./../styled-components/styles.interface";
import styled from "styled-components";

export const TemplatesContainer = styled.section`
    margin: 4em 0;

    @media (max-width: ${breakpoints.mobile}px) {
        margin: 2em 0;
    }
    @media (max-width: 400px) {
        margin-top: 1em 0;
    }

    aside {
        display: flex;
        justify-content: space-between;

        p {
            color: ${({ text }: ITheme) => text};
            font-weight: 500;
            font-size: 1.125em;
            line-height: 23px;
        }

        small {
            color: ${({ numberLabel }: ITheme) => numberLabel};
            font-weight: normal;
            font-size: 0.875em;
            line-height: 18px;
        }
    }
`;
