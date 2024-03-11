import { Transition } from "@headlessui/react";

import {
    ArrowRightIcon,
} from "lucide-react";

import { Button } from "@/view/components/ui/Button";

import { useCountryStore } from "@/app/store/Country/Country";

import { Skeleton } from "@/view/components/ui/Skeleton";

import empty from '../../../assets/images/empty.svg'
import sad from '../../../assets/images/sad.svg'

import CountryInfo from "./components/CountryInfo";
import { useCountriesViewModel } from "./useCountriesViewModel";

import { useCountryQueryParam } from "@/app/hooks/useGetCountryQueryParam";

export function Countries() {
    const { country } = useCountryStore();
    const countryFilter = useCountryQueryParam();

    const {
        visibleCountries,
        startIndex,
        itemsPerPage,
        data,
        isLoading,
        error,
        emptyCountries,
        handleCountrySelected,
        handleLoadMore,
        refetch
    } = useCountriesViewModel();

    return (
        <div className="flex flex-row gap-8 min-h-[624px]">
            <div className={`${country ? 'hidden' : 'flex flex-col gap-8'} w-full 2xl:flex 2xl:flex-col 2xl:gap-8 justify-between`}>
                <div className={`${emptyCountries || error ? 'flex' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'} 2xl:min-w-[880px]`}>
                    {visibleCountries?.map((country, index) => (
                        <div
                            key={index}
                            className="p-6 bg-muted rounded-lg flex flex-row justify-between items-center"
                        >
                            <img
                                src={country.flags?.svg}
                                alt=""
                                className="w-24 h-24 rounded-md"
                            />
                            <div className="flex flex-col items-center">
                                <strong>{country.name?.common}</strong>
                                <span className="text-zinc-500">Capital</span>
                            </div>
                            <button onClick={() => handleCountrySelected(country)}>
                                <ArrowRightIcon className="text-indigo-500 font-semibold w-6 h-6" />
                            </button>
                        </div>
                    ))}

                    {emptyCountries && (
                        <div className="m-auto flex items-center justify-center gap-4 mb-8">
                            <img src={empty} alt="" />
                            <p>Nenhum resultado foi encontrado para <strong>“{countryFilter}”</strong></p>
                        </div>
                    )}

                    {error && (
                        <div className="m-auto flex items-center justify-center gap-4 mb-8">
                            <img src={sad} alt="" />
                            <div className="flex flex-col gap-4">
                                <strong className="text-xl">Ocorreu um erro ao obter os<br />seus países</strong>
                                <Button className="w-1/2" onClick={() => refetch()}>Tente novamente</Button>
                            </div>
                        </div>
                    )}

                    {isLoading && (
                        <>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg flex flex-row items-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-md "/>

                            <div className="flex flex-col items-center gap-2">
                                <Skeleton className="w-40 h-6"/>
                                <Skeleton className="w-32 h-4"/>
                            </div>
                        </div>
                        </>
                    )}
                </div>

                {data?.length! > startIndex + itemsPerPage && !emptyCountries && (
                    <Button disabled={isLoading} onClick={handleLoadMore} className="w-80 rounded-full mx-auto bg-indigo-500 hover:bg-indigo-600 text-white ">
                        Load more countries
                        <ArrowRightIcon className="text-white font-semibold w-6 h-6 ml-4" />
                    </Button>
                )}
            </div>

            <Transition
                show={Boolean(country)}
                enter="transition-opacity duration-300 ease-in"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {country && (
                    <CountryInfo />
                )}
            </Transition>
        </div>
    );
}
