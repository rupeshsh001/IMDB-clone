import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ movieDetails }) => {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
            <Link href={`/movie/${movieDetails.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path || movieDetails.poster_path}`}
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    placeholder='blur'
                    blurDataURL='/spinner.svg'
                    alt='image is not available'
                ></Image>
                <div className='p-2'>
                    <p className='line-clamp-2 text-md'>{movieDetails.overview}</p>
                    <h2 className='truncate text-lg font-bold'>{movieDetails.title || movieDetails.name}</h2>
                    <p className='flex items-center'>
                        {movieDetails.release_date || movieDetails.first_air_date}
                        <FiThumbsUp className='h-5 mr-1 ml-3' /> {movieDetails.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
