class Provider {
  /**
   * Gets the weather for a given city
   */
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }
  /**
   * Gets the weather for a given city
   */
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }
  /**
   * Given Longtitude and latitude, this function returns a city
   */
  static findCity(long, lat) {
    return Promise.resolve(`London`);
  }
}

// 1. task
Provider.findCity(51.5074, 0.1278).then((res) => console.log(res));

// 2. task
Provider.findCity(51.5074, 0.1278).then((res) => {
  Provider.getWeather(res).then((resp) => console.log(resp));
});

// 3. task
const CITY = "London";
Provider.getLocalCurrency(CITY).then((curr) => {
  Provider.getWeather(CITY).then((weather) => {
    console.log(`${weather}. ${curr}`);
  });
});
