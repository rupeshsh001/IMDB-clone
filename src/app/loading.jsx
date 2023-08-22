/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <img className='h-96' src='spinner.svg' alt='spinner' />
        </div>
    );
};

export default Loading;
