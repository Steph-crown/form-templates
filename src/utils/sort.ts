import { ITemplateData } from "./../services/services.interface";
export const sortTemplatesByNameOrder = (
    templates: ITemplateData[],
    key: "Ascending" | "Descending" | "Default"
) => {
    let sorted = templates;

    //    Ascendding
    if (key === "Ascending") {
        sorted = sorted.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }

    if (key === "Descending") {
        sorted = sorted.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            // names must be equal
            return 0;
        });
    }

    return sorted;
};

export const sortTemplatesByDate = (
    templates: ITemplateData[],
    key: "Ascending" | "Descending" | "Default"
) => {
    let sorted = templates;

    //    Ascendding
    if (key === "Ascending") {
        sorted = sorted.sort(function (a, b) {
            var dateA = new Date(a.created).getTime(); // ignore upper and lowercase
            var dateB = new Date(b.created).getTime(); // ignore upper and lowercase
            if (dateA < dateB) {
                return -1;
            }
            if (dateA > dateB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }

    //    Descending
    if (key === "Descending") {
        sorted = sorted.sort(function (a, b) {
            var dateA = new Date(a.created).getTime(); // ignore upper and lowercase
            var dateB = new Date(b.created).getTime(); // ignore upper and lowercase
            if (dateA < dateB) {
                return 1;
            }
            if (dateA > dateB) {
                return -1;
            }

            // names must be equal
            return 0;
        });
    }

    return sorted;
};
