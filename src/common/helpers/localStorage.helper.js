export function saveDataToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadDataFromStorage(key) {
    const stringData = localStorage.getItem(key);
    return JSON.parse(stringData);
}