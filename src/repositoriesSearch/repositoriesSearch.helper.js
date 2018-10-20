export const ITEMS_PER_PAGE = 100;

export function getDateForRequest() {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date.toISOString().split('T')[0];
}

export function getSearchRequestQuery(page) {
    return `?sort=stars&q=created:>${getDateForRequest()}&page=${page}&per_page=${ITEMS_PER_PAGE}`;
}