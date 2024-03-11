import { create } from "zustand";

import { CountryTypesStore } from "./CountryTypesStore";
import { ICountryData } from "@/app/types/CountryTypes";

export const useCountryStore = create<CountryTypesStore>((set) => ({
    country: null,
    setCountry: (country) => set({ country }),
}));
