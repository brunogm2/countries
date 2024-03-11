export interface CapitalInfo {
    latlng: number[];
}

export interface Demonyms {
    eng: string;
    fra: string;
}

export interface Currencies {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Demographics {
    '2018': number;
}

export interface IDD {
    root: string;
    suffixes: string[];
}

export interface LanguageTranslations {
    [key: string]: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        }
    };
}

export interface PostalCode {
    format: string;
    regex: string;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Translations {
    [key: string]: {
        official: string;
        common: string;
    };
}

export interface ICountryData {
    altSpellings: string[];
    area: number;
    capital: string[];
    capitalInfo: CapitalInfo;
    car: {
        signs: string[];
        side: string;
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: CoatOfArms;
    continents: string[];
    currencies: Currencies;
    demonyms: Demonyms;
    fifa: string;
    flag: string;
    flags: Flags;
    gini: Demographics;
    idd: IDD;
    independent: boolean;
    landlocked: boolean;
    languages: LanguageTranslations;
    latlng: number[];
    maps: Maps;
    name: Name;
    population: number;
    postalCode: PostalCode;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: Translations;
    unMember: boolean;
}
