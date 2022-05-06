import react from 'react'
import { useDispatch } from 'react-redux';

import { Layout } from './components'
import { get_urls_by_token } from './store/auth-store/auth-actions';
import AppRoutes from './AppRoutes'
import AppModals from './AppModals';

const App = () => {

  // On refreshing update information about user and verify JWT token.
  const dispatch = useDispatch()
  dispatch(get_urls_by_token())


  return (
    <Layout>
      <AppModals />
      <AppRoutes />
    </Layout>
  );
}

export default App;
