export const saveToLocalStorage = (key, data) => {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
};

export const getFromLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
};

export const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};