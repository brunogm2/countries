import { useSearchParams } from 'react-router-dom';

export function useCountryQueryParam(): string {
    const [searchParams] = useSearchParams();
    const country = searchParams.get('country');


    return country || '';
}

