import type { NextPage } from 'next';
import { loginUrl } from '../services/login';

const Login: NextPage = () => {
  return (
    <div className="bg-gray-800 h-screen p-8 flex items-center justify-center">
      <a className="text-white bg-brand py-4 px-8 rounded-full" href={loginUrl}>
        Login
      </a>
    </div>
  );
};

export default Login;
