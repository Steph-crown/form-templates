import { ITheme } from "./../styled-components/styles.interface";
import styled from "styled-components";

export const ModeToggleContainer = styled.button`
    background-color: ${({ toggleBackground }: ITheme) => toggleBackground};
    transition: 0.5s ease;
    width: 50px;
    height: 24px;
    border-radius: 32px;
    border: none;
    outline: none;
    position: relative;

    &::after {
        content: "";
        width: 28px;
        height: 28px;
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
`;
