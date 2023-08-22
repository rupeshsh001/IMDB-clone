'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
        console.log(search);
    };
    return (
        <form className='flex max-w-6xl mx-auto justify-between items-center px-5' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Search Keywords...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'
            />
            <button type='submit' disabled={!search} className='text-amber-500 disabled:text-gray-400 flex-1'>
                Search
            </button>
        </form>
    );
};

export default SearchBox;
