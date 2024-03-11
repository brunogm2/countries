import { useCountryQueryParam } from "@/app/hooks/useGetCountryQueryParam";
import { ICountryData } from "@/app/types/CountryTypes";
import { useEffect, useMemo, useState } from "react";

export default function useHistoricViewModel() {
    const [storedData, setStoredData] = useState<ICountryData[] | null>(null);

    const country = useCountryQueryParam();

    const filteredCountries = useMemo(() => {
        if (storedData) {
            return storedData.filter((data) => (
                data.name?.common.toLowerCase().includes(country.toLowerCase())
            ));
        } else {
            return [];
        }
    }, [storedData, country]);

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem('countries');
        if (dataFromLocalStorage) {
            const parsedData: ICountryData[] = JSON.parse(dataFromLocalStorage);
            setStoredData(parsedData);
        }
    }, []);

    return { filteredCountries, storedData }
}
