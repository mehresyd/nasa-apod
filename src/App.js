import React from 'react';
import './App.css';
import { getPictureOfTheDay } from './api';

function App() {
  const [apodDetails, setApodDetails] = React.useState(null)

  React.useEffect(() => {
    const getPicture = async () => {
      const response = await getPictureOfTheDay()
      setApodDetails(response);
    }
    
    getPicture()
  }, [])


  return (
    <div className="App">
     <h1>NASA Astornomy Picture of the Day</h1>

     {
        apodDetails ?
        <>
          <img src={apodDetails.url}/>
          <div>{apodDetails.copyright}</div>
        </>
        :
        <p>Loading...</p>
     }

    </div>
  );
}

export default App;
