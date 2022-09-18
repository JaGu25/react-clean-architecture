import GitHub from "../pages/GitHub/Github";
import Pokemon from "../pages/Pokemon/Pokemon";

export enum FirstAppRoutes {
    "POKEMON" = "pokemon",
    "GITHUB" = "github"
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
        component: Pokemon,
        name: FirstAppRoutes.POKEMON
    },
    {
        path: 'github',
        component: GitHub,
        name: FirstAppRoutes.GITHUB
    }
];