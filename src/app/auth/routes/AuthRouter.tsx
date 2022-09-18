import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

const AuthRouter: React.FC = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
        </Routes>
    )
}

export default AuthRouter
