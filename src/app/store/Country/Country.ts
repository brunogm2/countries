import { create } from "zustand";

import { CountryTypesStore } from "./CountryTypesStore";

export const useCountryStore = create<CountryTypesStore>((set) => ({
    country: null,
    setCountry: (country) => set({ country }),
}));
