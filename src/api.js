import {NASA_API_KEY} from "./secrets";

const API_URL_BASE = "https://api.nasa.gov/planetary/apod";

export const getPictureOfTheDay = async () => {
    //this is an example of string templating 
    //combining JS variables and plain text to make a new string
    const apiUrl = `${API_URL_BASE}?api_key=${NASA_API_KEY}`;

    //async await = updates/nicer promises
    const response = await fetch(apiUrl);

    console.log('response from NASA: ', response);

    if (response.status !== 200) {
        console.error('Error returned:', response);
        return null;
    }

    return response.json();
}