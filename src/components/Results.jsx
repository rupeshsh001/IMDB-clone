import React from 'react';
import Card from './Card';

const Results = ({ movieData }) => {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
            {movieData.map((movieDetails) => (
                <Card key={movieDetails.id} movieDetails={movieDetails} />
            ))}
        </div>
    );
};

export default Results;
