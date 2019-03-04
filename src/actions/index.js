 const API_KEY = '522842a3d38cdd9163b4126f3f669250';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?id=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

 export function fetchweather(city){
  const url = '${ROOT_URL}&q=${city}, us';
 	return{
 		type: FETCH_WEATHER
 	};

 }
