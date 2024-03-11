import { ICountryData } from "@/app/types/CountryTypes";
import { httpClient } from "../httpClient";

export async function Countries() {
    const { data } = await httpClient.get<ICountryData[]>(`/all`);

    return data;
}
