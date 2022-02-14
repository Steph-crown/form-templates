import styled from "styled-components";
import { ITheme } from "../styled-components/styles.interface";

export const PaginationContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;

    button {
        outline: 0;
        background-color: transparent;
    }

    button,
    p {
        display: block;
        font-weight: bold;
        margin: 0;
    }

    .pagination {
        &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            /* margin-bottom: 2rem; */

            &:last-child {
                margin-right: 0;
            }

            &-page-details {
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 1.125em;

                @media (max-width: 640px) {
                    font-size: 1em;
                }
                .current-page {
                    border: 1px solid ${({ text }: ITheme) => text};
                    border-radius: 3px;
                    width: 1.875em;
                    height: 1.875em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 0.75em;
                }
            }

            &-page,
            &-dot {
                border: 0.2rem solid ${({ text }: ITheme) => text};
                padding: 0.4rem 1.4rem 0.5rem;
                border-radius: 0.4rem;
            }

            &-page {
                &.active {
                    color: #4c6fff;
                    border-color: #4c6fff;
                }
            }

            &-dot {
            }

            &-prev,
            &-next {
                font-weight: 500;
                font-size: 1.125em;
                @media (max-width: 640px) {
                    font-size: 1em;
                }
                line-height: 23px;
                text-align: center;
                background: transparent;
                outline: none;
                border: none;
                color: ${({ text }: ITheme) => text};
                cursor: pointer;

                &:disabled {
                    color: #718096;
                    cursor: not-allowed;
                }
            }
        }
    }
`;
