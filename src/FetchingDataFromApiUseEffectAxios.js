/*

The effect hook runs when the component mounts but also when the component updates. Because we are setting the state after every data fetch, the component updates and the effect runs again. It fetches the data again and again. That's a bug and needs to be avoided. We only want to fetch data when the component mounts. That's why you can provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component.




*/





import React, { useState, useEffect } from 'react';
import axios from 'axios';





function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
       async  function fetchData(){

        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
          );
              
          setData(result.data);

       }
       fetchData()
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;