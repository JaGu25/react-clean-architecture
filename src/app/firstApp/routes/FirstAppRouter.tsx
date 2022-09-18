import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FirstAppProvider } from '../store/context'
import { routes } from './routes'

const FirstAppRouter: React.FC = () => {
    return (
        <FirstAppProvider>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </FirstAppProvider>
    )
}

export default FirstAppRouter
