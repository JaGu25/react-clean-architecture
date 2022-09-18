import Login from "../pages/Login/Login";

export enum FirstAppRoutes {
    "LOGIN" = "login"
}

interface Route {
    name: string
    path: string
    component: () => JSX.Element
    to?: string
}

export const routes: Route[] = [
    {
        path: 'login',
        component: Login,
        name: FirstAppRoutes.LOGIN
    },
];