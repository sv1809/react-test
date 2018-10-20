export const ITEMS_PER_PAGE = 100;

export function getDateForRequest() {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date.toISOString().split('T')[0];
}

export function getSearchRequestQuery(page, filter) {
    let result = `?sort=stars&page=${page}&per_page=${ITEMS_PER_PAGE}&q=created:>${getDateForRequest()}`;
    if (filter.license !== undefined) {
        result += ` license:${filter.license}`
    }
    return result;
}