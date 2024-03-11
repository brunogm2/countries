import { useEffect, useMemo, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useCountryStore } from "@/app/store/Country/Country";
import { ICountryData } from "@/app/types/CountryTypes";

import { countriesService } from "@/app/services/countriesService";
import { useCountryQueryParam } from "@/app/hooks/useGetCountryQueryParam";
import useLocalStorage from "@/app/hooks/useLocalStorage";

export function useCountriesViewModel() {
    const country = useCountryQueryParam();

    const { setCountry } = useCountryStore();

    const [startIndex, setStartIndex] = useState(0);
    const [countries, setCountries] = useLocalStorage('countries', []);

    const itemsPerPage = 12;
    
    useEffect(() => {
        setStartIndex(0);
    }, [country]);

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['country'],
        queryFn: () => countriesService.Countries(),
        placeholderData: keepPreviousData,
        // staleTime: 10000,
        retry: false,
    });

    const filteredCountries = useMemo(() => data?.filter((data) => (
        data.name?.common.toLowerCase().includes(country.toLowerCase())
    )), [data, country]);

    const visibleCountries = filteredCountries?.slice(startIndex, startIndex + itemsPerPage);

    const emptyCountries = visibleCountries != undefined && visibleCountries.length <= 0;

    function handleLoadMore() {
        setStartIndex(startIndex + itemsPerPage);
    };

    function handleCountrySelected(country: ICountryData) {
        setCountries([...countries, country]);

        setCountry(country);
    }

    return {
        startIndex,
        setStartIndex,
        handleLoadMore,
        visibleCountries,
        emptyCountries,
        handleCountrySelected,
        itemsPerPage,
        data,
        isLoading,
        error,
        refetch
    }
}
