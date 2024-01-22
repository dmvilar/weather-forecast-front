import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { WeatherForecast } from "../../types";
import WeatherCard from "../WeatherCard/WeatherCard";

interface WeatherListProps {
  forecasts: WeatherForecast[];
}

const WeatherList: React.FC<WeatherListProps> = ({ forecasts }) => {
  return (
    <Box width="full" maxW="container.xl" mx="auto" p={1}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 7 }} spacing={5}>
        {forecasts.map((forecast, index) => (
          <WeatherCard
            key={index}
            index={index}
            day={forecast.date}
            maxTemp={forecast.maxTemperature}
            minTemp={forecast.minTemperature}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WeatherList;
