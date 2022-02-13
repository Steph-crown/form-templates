import { ITheme } from "./../styled-components/styles.interface";
import styled from "styled-components";

export const ModeToggleContainer = styled.button`
    background-color: ${({ toggleBackground }: ITheme) => toggleBackground};
    transition: 0.5s ease;
    width: 40px;
    height: 20px;
    border-radius: 32px;
    border: none;
    outline: none;
    position: relative;

    &::after {
        content: "";
        width: 24px;
        height: 24px;
        transition: 0.5s ease;
        left: ${({ toggleButtonX }: ITheme) => toggleButtonX};
        top: 50%;
        transform: translateY(-50%);
        bottom: 0;
        background: ${({ toggleButton }: ITheme) => toggleButton};
        position: absolute;
        border-radius: 32px;
        cursor: pointer;
    }

    /* @media (max-width: 600px) {
        width: 32px;
        height: 16px;

        &::after {
            width: 20px;
            height: 20px;
        }
    } */
`;
