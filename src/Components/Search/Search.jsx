import React from 'react'
import useDebouncing from '../hokes/useDebouncing';

export default function Search({updateSearchTerm}) {
  const debounceUpdateSearch = useDebouncing((e) => updateSearchTerm(e.target.value));
  return (
    <>
      <div>
        <input
        className=' border-2 md:w-[900px] h-10 mt-5 rounded-md px-5 bg-transparent'
        id= "search_pokemon"
         type="text" placeholder='Which Pokemon your are looking for'
         
         onChange={debounceUpdateSearch }
         
         
         />
      </div>
    </>
  )
}
