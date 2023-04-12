import React from 'react';
import './App.css';
import { getPictureOfTheDay } from './api';

function App() {
  React.useEffect(() => {
    console.log('use effect')

    const getPicture = async () => {
      const response = await getPictureOfTheDay()
      console.log('response in use effect', response)
    }

    getPicture()
  }, [])



  return (
    <div className="App">
     <h1>NASA Astornomy Picture of the Day</h1>
     <img src={''}/>
    </div>
  );
}

export default App;
