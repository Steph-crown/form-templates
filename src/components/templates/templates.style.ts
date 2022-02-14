import { breakpoints } from "./../../consts/breakpoints";
import { ITheme } from "./../styled-components/styles.interface";
import styled from "styled-components";

export const TemplatesContainer = styled.section`
    margin: 4em 0;

    @media (max-width: ${breakpoints.mobile}px) {
        margin: 3em 0;
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

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1.5em;
    }

    .empty {
        .empty__icon {
            color: ${({ endOfListIllustration }: ITheme) =>
                endOfListIllustration};
            /* transform: scale(0.5); */
            width: 300px;
            height: 240px;
            transition: 0.6s;

        }

        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;

        h3 {
            font-weight: 400;
            font-size: 1.5em;
            color: ${({ cardHeader }: ITheme) => cardHeader};
        }
        p {
            color: ${({ inputPlaceholder }: ITheme) => inputPlaceholder};
        }
    }
`;
