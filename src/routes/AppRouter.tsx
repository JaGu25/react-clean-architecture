import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { lazy } from 'react';
const FirstAppRouter = lazy(() => import(/* webpackChunkName: "FirstAppRouter" */ '../app/firstApp/routes/FirstAppRouter'))
const SecondAppRouter = lazy(() => import(/* webpackChunkName: "SecondAppRouter" */ '../app/secondApp/routes/SecondAppRouter'))
const AuthRouter = lazy(() => import(/* webpackChunkName: "AuthRouter" */ '../app/auth/routes/AuthRouter'))

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pokemon/*" element={<FirstAppRouter />} />
                <Route path="/rick-morty/*">
                    <Route path='' element={<SecondAppRouter />} />
                </Route>
                <Route path="/auth/*" element={<AuthRouter />} />
            </Routes>
        </Router >
    )
}

export default AppRouter