import { Layout } from './components'
import AppRoutes from './AppRoutes'
import { useDispatch } from 'react-redux';
import { get_urls_by_token } from './store/auth-store/auth-actions';

const App = () => {
  // For cheking if key is valid
  const dispatch = useDispatch()
  dispatch(get_urls_by_token())

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
