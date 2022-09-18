import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Loading from '../shared/components/Loading/Loading';
const FirstAppRouter = lazy(() => import(/* webpackChunkName: "FirstAppRouter" */ '../app/firstApp/routes/FirstAppRouter'))
const SecondAppRouter = lazy(() => import(/* webpackChunkName: "SecondAppRouter" */ '../app/secondApp/routes/SecondAppRouter'))
const AuthRouter = lazy(() => import(/* webpackChunkName: "AuthRouter" */ '../app/auth/routes/AuthRouter'))

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/pokemon/*" element={<FirstAppRouter />} />
                    <Route path="/rick-morty/*">
                        <Route path='' element={<SecondAppRouter />} />
                    </Route>
                    <Route path="/auth/*" element={<AuthRouter />} />
                </Routes>
            </Suspense>
        </Router >
    )
}

export default AppRouter