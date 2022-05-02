import { ErrorModal, Layout } from './components'
import AppRoutes from './AppRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { get_urls_by_token } from './store/auth-store/auth-actions';

const App = () => {
  // Error showing
  const isError = useSelector(state => state.ui.error.msg)
  // For cheking the jwt token validity
  const dispatch = useDispatch()
  dispatch(get_urls_by_token())

  return (
    <Layout>
      {isError && < ErrorModal />}
      <AppRoutes />
    </Layout>
  );
}

export default App;
