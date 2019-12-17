export type Loginfo = {
    id: number;
    user: string;
    password: string;
}

export type Locations = {
    id: number;
    user: string;
    cities: [string];
}

export type Query = {
    getLocations: Locations;
}