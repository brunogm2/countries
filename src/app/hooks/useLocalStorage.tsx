import { useState } from 'react';

function useLocalStorage( key: string, initialValue: any[]) {
    function getLocalStorageValue() {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    };

    const [value, setValue] = useState(getLocalStorageValue);

    function updateValue(newValue: any[]) {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, updateValue];
}

export default useLocalStorage;
