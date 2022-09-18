import './assets/scss/index.scss';
import AppRouter from './routes/AppRouter';
import { useSelector } from 'react-redux';
import { GlobalState } from './store/reducer';
import Loading from './shared/components/Loading/Loading';

function App() {

  const pendingFetching = useSelector((state: GlobalState) => state.global.pendingFetching)

  return (
    <>
      {pendingFetching > 0 && <Loading />}
      <AppRouter />
    </>
  )
}

export default App
