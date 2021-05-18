import { render } from '@testing-library/react'
import React from 'react';
import './Search.css';

const SearchBar = ()=>{

    return (
        <input type="text" id="search" name="Search"></input>
    );
}
export default SearchBar;