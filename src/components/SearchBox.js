import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pb3'>
            <input 
                className='pa2 ba'
                type='search' 
                placeholder='Search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;