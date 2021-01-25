import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WikiList from './WikiList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [wikiListDefault, setWikiListDefault] = useState();
  const [wikiList, setWikiList] = useState();

  const URL = "https://api.adalo.com/v0/apps/e061381f-d3ba-4c63-b0ce-ad2226313c40/collections/t_e4ebdef36a584d39bd645562be5621c7";
  const bearer = "Bearer com9m8zv1do4ao2otsp9ojw92"
  const fetchData = async () => {
    return await fetch(URL,{
        headers: {
        'Authorization': bearer,
        }
    })
      .then(response => response.json())
      .then(data => {
          console.log(data.records)
         setWikiList(data.records) 
         setWikiListDefault(data.records)
       });}

  const updateInput = async (input) => {
     const filtered = wikiListDefault.filter(wiki => {
      return wiki.Name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setWikiList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Traffix Wiki</h1>
      <SearchBar className="container"
       input={input} 
       onChange={updateInput}
      />
      <WikiList wikiList={wikiList}/>
      
      <div ></div>
    </>
   );
}

export default SearchPage