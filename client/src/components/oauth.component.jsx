import { signInWithGooglePopup } from '../utils/firebase';

const OAuth = () => {
  const clickHandler = async () => {
    const user = await signInWithGooglePopup();
    console.log(user);
  };
  return (
    <button
      type='button'
      onClick={clickHandler}
      className='p-3 text-white uppercase bg-red-500 rounded-lg hover:opacity-90'
    >
      Sign in with google
    </button>
  );
};

export default OAuth;
