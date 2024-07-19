import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef();
  const [image, setImage] = useState(undefined);
  const [user, setUser] = useState({});

  return (
    <main className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-6'>
        <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src=''
          alt={currentUser?.username}
          className='self-center w-24 h-24 my-2 transition-all duration-300 ease-in-out rounded-full cursor-pointer hover:scale-105'
          onClick={(e) => fileRef.current.click(e)}
        />
        <input
          type='text'
          id='username'
          name='username'
          defaultValue={currentUser?.username}
          placeholder='Username'
          className='p-3 rounded-lg bg-slate-100'
        />

        <input
          type='email'
          id='email'
          name='email'
          defaultValue={currentUser?.email}
          placeholder='Email'
          className='p-3 rounded-lg bg-slate-100'
        />

        <input
          type='password'
          id='password'
          placeholder='Password'
          className='p-3 rounded-lg bg-slate-100'
        />

        <button className='p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80'>
          Update
        </button>
      </form>
      <div className='flex justify-between gap-2 mt-5'>
        <p className='text-center text-red-700 cursor-pointer'>
          Delete your account
        </p>
        <p className='text-center text-red-700 cursor-pointer'>Sign Out</p>
      </div>
    </main>
  );
};

export default Profile;
