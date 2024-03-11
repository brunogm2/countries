import { Button } from "@/view/components/ui/Button";
import { ArrowRightIcon, Banknote, Languages, MapPin, PersonStanding, X } from "lucide-react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCountryStore } from "@/app/store/Country/Country";
import { Skeleton } from "@/view/components/ui/Skeleton";

export default function CountryInfo() {

    const { country, setCountry } = useCountryStore();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDvm22z_kWs928kdLoO5LQCjmmIwK98SKg"
    })

    return (
        <div className="w-full relative bg-muted rounded-lg p-6 flex flex-col gap-6 2xl:w-[336px]">
            <button className="absolute top-0 right-0 mr-[-6px] mt-[-6px]" onClick={() => setCountry(null)}>
                <X size={18} />
            </button>

            <header className="flex flex-row gap-4 items-center">
                <img
                    src={country?.flags?.svg}
                    alt=""
                    className="w-24 h-24 rounded-md bg-red-300"
                />

                <div className="flex flex-col ">
                    <strong className="text-3xl">{country?.name?.common}</strong>
                    <span className="text-zinc-500">{country?.capital[0]}</span>
                </div>

            </header>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <Languages size={20}/>
                    <span className="font-bold">
                        Languages
                    </span>
                </div>

                {country?.languages && (
                    <strong className="text-3xl">
                        {Object.values(country.languages)[0]}
                    </strong>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <Banknote size={20}/>
                    <span className="font-bold">
                        Currency
                    </span>
                </div>

                {country?.currencies && (
                    <strong className="text-3xl">
                        {country.currencies[Object.keys(country.currencies)[0]].name}
                    </strong>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <PersonStanding  size={20}/>
                    <span className="font-bold">
                        Population
                    </span>
                </div>

                <strong className="text-3xl">
                    {country?.population}
                </strong>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <MapPin size={20}/>
                    <span className="font-bold">
                        Location
                    </span>
                </div>

                {isLoaded && (
                    <div>
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '200px' }}
                            center={{
                                lat: country!.latlng[0],
                                lng: country!.latlng[1]
                            }}
                            zoom={4}
                        >

                        </GoogleMap>
                    </div>
                )}
            </div>

            <div className="h-full flex flex-col justify-end">
                <a target="_blank" href={country?.maps?.googleMaps}>
                    <Button onClick={() => ''} className="w-full rounded-full mx-auto bg-indigo-500 hover:bg-indigo-600 text-white">
                        Browse in full screen
                        <ArrowRightIcon className="text-white font-semibold w-6 h-6 ml-4" />
                    </Button>
                </a>
            </div>
        </div>
    );
}
