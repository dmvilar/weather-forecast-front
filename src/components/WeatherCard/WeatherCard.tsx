import React from "react";
import { Box, Heading, Highlight, Text, VStack } from "@chakra-ui/react";

interface WeatherCardProps {
  index: number;
  day: string;
  maxTemp: string;
  minTemp: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  index,
  day,
  maxTemp,
  minTemp,
}) => {
  const getTemp = (temp: string) => {
    return temp === "-" ? temp : `${temp}°C`;
  };

  const getDayOfWeek = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <VStack spacing={1}>
        <Heading fontSize="x-large">{getDayOfWeek(day)}</Heading>

        <Text fontSize="sm">
          <Highlight
            query={day}
            styles={{ px: "2", py: "1", rounded: "full", bg: "blue.100" }}
          >
            {day}
          </Highlight>
        </Text>
        <Text>High: {getTemp(maxTemp)}</Text>
        <Text>Low: {getTemp(minTemp)}</Text>
      </VStack>
    </Box>
  );
};

export default WeatherCard;
