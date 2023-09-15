import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import './SearchBar.css';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="search-bar">
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar Produtos"
                className="search__input"
                onChange={ ({target}) => setSearchValue(target.value) }
                required
            />
            <button type="submit" className="search__button"><BiSearchAlt /></button>
        </form>  );
}

export default SearchBar;
