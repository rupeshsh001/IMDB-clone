import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
            <div className='flex'>
                <MenuItem title={'HOME'} address={'/'} Icon={AiFillHome} />
                <MenuItem title={'ABOUT'} address={'/about'} Icon={AiFillInfoCircle} />
            </div>
            <div className='flex items-center space-x-5'>
                <DarkModeSwitch />
                <Link href='/home'>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg text-white mr-1'>IMDb</span>
                        <span className='text-xl hidden sm:inline-block'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;
