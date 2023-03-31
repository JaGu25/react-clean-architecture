import Notes from "../pages/Notes/Notes";

export enum SecondAppRoutes {
    Notes = "notes"
}

interface Route {
    name: string
    path: string
    component: () => JSX.Element
    to?: string
}

export const routes: Route[] = [
    {
        path: 'notes',
        component: Notes,
        name: SecondAppRoutes.Notes
    }
];