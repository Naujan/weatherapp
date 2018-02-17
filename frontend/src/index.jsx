import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async ([lat, lon]) => {
  try {
    const response = await fetch(`${baseURL}/weather?lat=${lat}&lon=${lon}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return {};
  }
};

const getLocation = async () => {
  let location = [0, 0];
  if ('geolocation' in window.navigator) {
    await window.navigator.geolocation.getCurrentPosition((position) => {
      location = [position.coords.latitude, position.coords.longitude];
      console.log(`At getLocation: ${location}`);
    });
  } else {
    console.log('No location :(');
  }
  return location;
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
      weather: null,
    };
  }

  async componentWillMount() {
    const location = await getLocation();
    console.log(`At componentWillMount: ${location}`);
    const weather = await getWeatherFromApi(location);
    this.setState({
      weather,
      icon: weather.weather[0].icon.slice(0, -1),
    });
  }

  render() {
    const { weather, icon } = this.state;
    return (
      <div className="icon">
        {icon && <img alt={'weather icon'} src={`/img/${icon}.svg`} />}
        {weather && (
          <p>
            Your location: {weather.name}
            <br />
            Temperature: {weather.main.temp} Kelvins
          </p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('app'));
