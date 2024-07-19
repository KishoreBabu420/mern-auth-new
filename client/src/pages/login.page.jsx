import { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/oauth.component';
const initialUser = {
  email: '',
  password: '',
};
const Login = () => {
  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      //
    }
  };
  return (
    <main className='max-w-lg p-3 mx-auto'>
      <h1 className='my-4 text-3xl font-bold text-center'>
        Login to your Account
      </h1>

      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          placeholder='Email'
          id='email'
          onChange={handleChange}
          name='email'
          value={email}
          className='p-3 rounded-lg bg-slate-100'
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          onChange={handleChange}
          name='password'
          value={password}
          className='p-3 rounded-lg bg-slate-100'
        />

        <button
          type='submit'
          className='p-3 text-white uppercase rounded-lg shadow-lg bg-slate-700 hover:opacity-95 disabled:opacity-80'
        >
          {isLoading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>

      <div className='flex justify-center gap-2 mt-5 text-center'>
        <p>
          Don&apos;t have an account? &nbsp;
          <span className='text-blue-500'>
            <Link to='/register'>Register</Link>
          </span>
        </p>
      </div>
    </main>
  );
};

export default Login;
