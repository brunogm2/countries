import { useSearchParams } from 'react-router-dom';

export function useSetCountryQueryParam() {
    const [_, setSearchParams] = useSearchParams();

    const setCountryQueryParam = (key: string, value?: any): void => {
        setSearchParams(state => {
            if (value) {
                state.set(key, value);
            } else {
                state.delete(key);
            }
            return state;
        });
    };

    return setCountryQueryParam;
}

