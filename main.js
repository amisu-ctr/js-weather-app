import './style.css';
import { getWeather } from './weather';

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
  .then(renderWeather)
  .catch((e) => {
    console.error(e);
    alert('Error getting weather');
  });

function renderWeather() {}
