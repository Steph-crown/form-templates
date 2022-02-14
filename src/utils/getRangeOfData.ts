import { ITemplateData } from "./../services/services.interface";
export const getRangeOfData = (
    data: ITemplateData[],
    currentPage: number,
    dataPerPage: number
): any[] =>
    data.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage);
