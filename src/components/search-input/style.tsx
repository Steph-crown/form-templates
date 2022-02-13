import styled from "styled-components";
import { breakpoints } from "../../consts/breakpoints";
import { ITheme } from "../styled-components/styles.interface";

export const SearchInputContainer = styled.label`
    display: block;
    width: 20em;
    max-width: 100%;
    color: ${({ inputText }: ITheme) => inputText};
    position: relative;

    @media (max-width: ${breakpoints.mobile}px) {
        width: 100%;
    }

    svg {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
    }

    input {
        display: block;
        width: 100%;
        font-size: 0.875em;
        line-height: 17.71px;
        background: transparent;
        font-weight: 400;
        color: ${({ inputText }: ITheme) => inputText};
        padding: 13px 32px;
        padding-right: 3em;

        border-radius: 2px;
        outline: none;
        border: ${({ inputBorder }: ITheme) => `0.5px solid ${inputBorder}`};
        transition: 1s ease;

        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${({ inputPlaceholder }: ITheme) => inputPlaceholder};
            opacity: 1; /* Firefox */
            font-weight: 500;
        }

        :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: ${({ inputPlaceholder }: ITheme) => inputPlaceholder};
            font-weight: 500;
        }

        ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: ${({ inputPlaceholder }: ITheme) => inputPlaceholder};
            font-weight: 500;
        }

        &:focus {
        }
    }

    textarea {
        height: 10em;
    }

    small.error {
        color: var(--error);
        display: inline-block;
        margin-top: 8px;
    }

    & > div {
        position: relative;

        svg {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            right: 16px;
        }
    }
`;
