import { IState } from "./../slices/state.interface";

/**
 * A list of the possible category filters.
 * @type {IState["categoryFilter"][]}
 */
export const CATEGORY_FILTERS: IState["categoryFilter"][] = [
    "All",
    "E-commerce",
    "Education",
    "Health",
];

/**
 * A list of the possible date filters.
 * @type {IState["dateFilter"][]}
 */
export const DATE_FILTER: IState["dateFilter"][] = [
    "Ascending",
    "Default",
    "Descending",
];

/**
 * A list of the possible order filters.
 * @type {IState["orderFilter"][]}
 */
export const ORDER_FILTER: IState["orderFilter"][] = [
    "Ascending",
    "Default",
    "Descending",
];
