import './style.css';
import { getWeather } from './weather';

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
  .then(renderWeather)
  .catch((e) => {
    console.error(e);
    alert('Error getting weather');
  });

function renderWeather({ current, daily, hourly }) {
  console.log(hourly, daily, current);
  renderCurrentWeather(current);
  // renderDailyWeather(daily)
  // renderHourlyWeather(hourly)
  document.body.classList.remove('blurred');
}

const currentIcon = document.querySelector('[data-current-icon]');

function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function renderCurrentWeather(current) {
  setValue('current-temp', current.currentTemp);
  setValue('current-high', current.highTemp);
  setValue('current-low', current.lowTemp);
  setValue('current-fl-high', current.highFeelsLike);
  setValue('current-fl-low', current.lowFeelsLike);
  setValue('current-wind', current.windSpeed);
  setValue('current-precip', current.precip);
}
