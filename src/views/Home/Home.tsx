import { useState } from 'react';
import { getWeatherForecast } from '../../services/WeatherService';
import { WeatherForecast } from '../../types';
import { Box } from '@chakra-ui/react';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherList from '../../components/WeatherList/WeatherList';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherForecast[]>([]);

  const handleSearch = async (address: string) => {
    try {
      const data = await getWeatherForecast(address);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  return (
    <Box>
        <SearchBar onSearch={handleSearch} />
        <WeatherList forecasts={weatherData} />
    </Box>
  );
};

export default Home;
