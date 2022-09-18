import RickAndMorty from "../pages/RickAndMorty/RickAndMorty";

export enum SecondAppRoutes {
    "RICK_MORTY" = "rick-morty"
}

interface Route {
    name: string
    path: string
    component: () => JSX.Element
    to?: string
}

export const routes: Route[] = [
    {
        path: '',
        component: RickAndMorty,
        name: SecondAppRoutes.RICK_MORTY
    }
];