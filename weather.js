import axios from 'axios';
// https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime

export function getWeather(lat, lon, timezone) {
  return axios.get(
    'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime',
    {
      params: {
        latitude: lat,
        longitude: lon,
        timezone,
      },
    }
  );
  // .then(({ data }) => {
  //   return {
  //     current: parseCurrentWeather(data),
  //     daily: parseDailyWeather(data),
  //     hourly: parseHourlyWeather(data),
  //   };
  // });
}

// function parseCurrentWeather({current_weather, daily})

//axios - makes fetching easier
