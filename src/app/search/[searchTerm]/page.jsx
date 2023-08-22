import React from 'react';
import Results from '~/components/Results';
const SearchPage = async ({ params }) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
    );

    if (!res.ok) {
        throw new Error('Error fetching data');
    }

    const data = await res.json();
    const { results } = data;
    return (
        <div className=''>
            {!results && results.length === 0 && <h1 className='text-center pt-6'>No Results Found</h1>}
            {results && <Results movieData={results} />}
        </div>
    );
};

export default SearchPage;
