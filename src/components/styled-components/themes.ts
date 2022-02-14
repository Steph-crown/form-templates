import { ITheme } from "./styles.interface";

/**
 * light theme object
 * @type {ITheme}
 */
export const lightTheme: ITheme = {
    body: "#FFF",
    inputBorder: "#BDBDBD",
    text: "#3F3E3E",
    cardHeader: "#333447",
    toggleBackground: "#E9E9E9",
    toggleButton: "#363537",
    toggleButtonX: "-10%",
    background: "#363537",
    inputPlaceholder: "#8F8B8B",
    inputText: "#6F6D6D",
    numberLabel: "#989898",
    cardFooterBackground: "#F9F9F9",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.08)",
    cardBackground: "#fff",
    scrollBarColor: "#252525",
    selectBackground: "#e6e6e6",
    endOfListIllustration: "#FFFAF5",
};

/**
 * dark theme object
 * @type {ITheme}
 */
export const darkTheme: ITheme = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBackground: "#2E2E2E",
    toggleButton: "#fff",
    toggleButtonX: "50%",
    background: "#999",
    inputPlaceholder: "#8B8B8B",
    inputText: "#EAEAEA",
    inputBorder: "#C2C2C2",
    cardBackground: "#323232",
    cardHeader: "#EBEBEB",
    cardFooterBackground: "#2E2E2E",
    numberLabel: "#C9C9C9",
    boxShadow:
        "6px 6px 15px rgba(0, 0, 0, 0.02), -6px -6px 15px rgba(0, 0, 0, 0.02)",
    scrollBarColor: "#A9A9A9",
    selectBackground: "#324242",
    endOfListIllustration: "#323232",
};
