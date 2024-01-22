const API_BASE_URL = 'https://localhost:7175';

export const getWeatherForecast = async (address: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/WeatherForecast/${encodeURIComponent(address)}`);

    const responseJson:any = await response.json()
    if (!response.ok) {
      throw new Error(responseJson.errorMessage);
    }
    return responseJson;
  } catch (error) {
    throw error;
  }
};
