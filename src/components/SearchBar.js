import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

  
  
  return (
      <div className="form">
    <input className="input"
     key="random1"
     value={keyword}
     placeholder={"search..."}
     onChange={(e) => setKeyword(e.target.value)}/>
     </div>
  );
}

export default SearchBar