export const saveToLocalStorage = (key, data) => {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
};

export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};