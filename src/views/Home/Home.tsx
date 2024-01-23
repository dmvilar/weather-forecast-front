import { useState } from "react";
import { getWeatherForecast } from "../../services/WeatherService";
import { WeatherForecast } from "../../types";
import {
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
  Heading,
  Flex,
} from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherList from "../../components/WeatherList/WeatherList";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherForecast[]>([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (address: string) => {
    try {
      setIsLoading(true);
      setWeatherData([]);

      const data = await getWeatherForecast(address);
      setWeatherData(data);
      setIsLoading(false);
    } catch (error: any) {
      setWeatherData([]);
      showErrorMessage(error.toString());
      setIsLoading(false);
    }
  };

  const showErrorMessage = (message: string) => {
    setIsAlertVisible(true);
    setErrorMessage(message);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 8000);
  };

  return (
    <Box>
      <Flex justifyContent={"center"} paddingTop={'1rem'}>
        <Heading>7 day Weather Forecast</Heading>
      </Flex>
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      {isAlertVisible && (
        <Flex justifyContent={'center'}>
          <Alert status="error" w={'80%'}>
            <AlertIcon />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </Flex>
      )}
      <WeatherList forecasts={weatherData} />
    </Box>
  );
};

export default Home;
