import React from 'react';
import './WeatherCard.css';
import { Box, Heading, Text } from '@chakra-ui/react';

interface WeatherCardProps {
    index: number;
    day: string;
    maxTemp: number;
    minTemp: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ index, day, maxTemp, minTemp }) => {
    return (
        <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading fontSize="xl">{day}</Heading>
        <Text>Max Temp: {maxTemp}°C</Text>
        <Text>Min Temp: {minTemp}°C</Text>
      </Box>
    );
};

export default WeatherCard;
