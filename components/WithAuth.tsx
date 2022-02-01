import { useSelector } from 'react-redux';
import { selectToken } from '../store/user';
import { NextComponentType } from 'next';
import Login from '../components/Login';

function WithAuth<T>(Component: NextComponentType<T>) {
  const Auth = (props: T) => {
    const token = useSelector(selectToken);

    if (!token) {
      return <Login />;
    }

    return <Component {...props} />;
  };

  return Auth;
}

export default WithAuth;
