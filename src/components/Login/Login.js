import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const origin = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser] = useSignInWithGoogle(auth);

    if (user || guser) {
        navigate(origin, { replace: true })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

        e.target.reset()
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
    }
    return (
        <div className='flex h-full justify-center items-center'>
            <div>
                <h1 className='text-center mb-12 text-3xl font-bold text-gray-700'>Login Please</h1>
                <form onSubmit={handleFormSubmit}>
                    <input type="email" name="email" placeholder='Your Email' id="" required />
                    <br />
                    <br />
                    <input type="password" name="password" placeholder='Your Password' id="" required />
                    <br />
                    <input type="submit" className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0' value="Login" />
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        New In Crypto Cafe? <Link className='text-orange-700' to='/register'>Register Please</Link>
                    </p>
                </form>
                <button onClick={handleGoogleSignIn} className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-500'>
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default Login;