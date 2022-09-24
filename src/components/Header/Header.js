import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../components/CustomLink/CustomLink'
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-gray-600'>
                Crypto Cafe
                </Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                {
                    user && <h1 className='text-blue-500'>{user.displayName}</h1>
                }
                {
                    user ? <CustomLink onClick={logout}>LogOut</CustomLink> : <CustomLink to='/login'>Login</CustomLink>
                }
            </div>
        </div>
    );
};

export default Header;