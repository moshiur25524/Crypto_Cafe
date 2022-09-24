import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleFormSubmit = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email,password)
        e.target.reset()
    }

    if(user){
        console.log(user);
    }
    if(error){
        console.error(error);
    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1 className='text-center mb-12 text-3xl font-bold text-gray-700'>Register Please</h1>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="name" placeholder='Your Name' id="" required />
                    <br /><br />
                    <input type="email" name="email" placeholder='Your Email' id="" required />
                    <br /><br />
                    <input type="password" name="password" placeholder='Your Password' id="" required />
                    <br />
                    <input type="submit" className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0' value="REGISTER" />
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        Already Have an Account? <Link className='text-orange-700' to='/login' >Login Please</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;