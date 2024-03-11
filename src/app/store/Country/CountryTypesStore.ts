import { ICountryData } from "@/app/types/CountryTypes";

export type CountryTypesStore = {
    country: ICountryData | null;
    setCountry: (data: ICountryData | null) => void;
}
