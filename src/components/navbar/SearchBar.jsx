import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const SearchBar = () => {
    const { searchText, setSearchText } = useContext(CartContext);
    
  return (
    <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
  )
}

export default SearchBar