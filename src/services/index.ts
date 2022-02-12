import { ITemplateData } from "./services.interface";
import { API_URL } from "../consts/api-url";

/**
 * This function makes a request to the API to get the form templates.
 *
 * @returns {Promise<ITemplateData[]>} the form templates promise
 */
export const getTheDataFromApi = async (): Promise<ITemplateData[]> => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};
