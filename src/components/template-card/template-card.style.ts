import styled from "styled-components";
import { ITheme } from "../styled-components/styles.interface";

export const TemplateCardContainer = styled.li`
    list-style-type: none;

    box-shadow: ${({ boxShadow }: ITheme) => boxShadow};
    background-color: ${({ cardBackground }: ITheme) => cardBackground};
    border-radius: 2px;

    width: 22em;
    max-width: 100%;

    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 1s ease;

    &:hover {
        transform: scale(1.05);
    }

    div {
        padding: 1.25em;
        padding-bottom: 2.5em;
    }

    h2 {
        font-weight: 500;
        font-size: 1.4em;
        line-height: 36px;
        color: ${({ cardHeader }: ITheme) => cardHeader};
        text-transform: capitalize;
    }

    p {
        font-weight: normal;
        font-size: 1em;
        line-height: 24px;
        color: ${({ text }: ITheme) => text};
        margin-top: 1em;
    }

    button {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #08bd37;
        background-color: ${({ cardFooterBackground }: ITheme) =>
            cardFooterBackground};
        width: 100%;
        text-align: left;
        padding: 0.8em 1.25em;
        outline: none;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 900px) {
        width: 20em;
        margin-bottom: 2em;
    }

    @media (max-width: 750px) {
        width: 17em;
        margin-bottom: 2em;
    }

    @media (max-width: 650px) {
        width: 100%;
        margin-bottom: 3em;

        h2 {
            font-size: 1.3em;
        }

        p {
            font-size: 0.875em;
        }
    }
`;
