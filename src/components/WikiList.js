import React from 'react';

const WikiList = ({wikiList=[]}) => {
  return (
    <>
    { wikiList.map((data,index) => {
        if (data) {
          return (
            <div key={data.id}>
              <h1>{data.Name}</h1>
        </div>	
    	   )	
    	 }
    	 return null
    }) }

   

    </>
  );
}

export default WikiList