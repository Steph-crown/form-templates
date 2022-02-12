import styled from "styled-components";
import { ITheme } from "../styled-components/styles.interface";

export const SelectContainer = styled.label`
    display: block;
    width: 10em;
    position: relative;

    div.dd-wrapper,
    button.dd-header {
        display: block;
        width: 100%;
    }

    small {
        font-weight: normal;
        font-size: 10px;
        line-height: 13px;
        color: ${({ inputPlaceholder }: ITheme) => inputPlaceholder};
        position: absolute;
        top: 2px;
        left: 10px;
        background-color: ${({ body }: ITheme) => body};
        display: inline-block;
        padding: 0 8px;
    }

    button.dd-header {
        font-size: 0.875em;
        cursor: pointer;
        line-height: 15px;
        background: transparent;
        margin-top: 8px;
        font-weight: 400;
        color: #222;
        padding: 13px 24px;
        border-radius: 2px;
        outline: none;
        border: ${({ inputBorder }: ITheme) => `0.5px solid ${inputBorder}`};
        display: flex;
        justify-content: space-between;
        min-height: 2px;
        align-items: center;

        color: ${({ inputPlaceholder }: ITheme) => inputPlaceholder};
        font-weight: 500;

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

        /* &:focus {
            box-shadow: 0px 0px 0px 2px rgba(76, 111, 255, 0.3);
            border: 1px solid #7895ff;
        } */
    }

    div.dd-list {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        /* padding: 7.5px 10px; */
        border-radius: 2px;
        transition: transform 1s;
        max-height: 200px;
        overflow-y: scroll;
        border: ${({ inputBorder }: ITheme) => `0.5px solid ${inputBorder}`};

        ::-webkit-scrollbar {
            width: 0px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: transparent;
        }
    }

    button.dd-list-item {
        font-weight: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color: ${({ text }: ITheme) => text};
        font-weight: 500;
        padding: 16px;
        outline: none;
        border: none;
        border-radius: 2px;
        transition: background 1s;
        display: flex;
        justify-content: flex-start;
        margin: 0px 0;
        cursor: pointer;
        background: transparent;

        &:hover {
            background: ${({ selectBackground }: ITheme) => selectBackground};
        }
    }

    button.dd-list-item[data-selected="true"] {
        background: ${({ selectBackground }: ITheme) => selectBackground};
    }
`;
