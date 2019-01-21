
const location = "Lima,PE";
const api_key = "ee689467f4d3bab29fb97a830f709dba";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
