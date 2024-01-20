const API_BASE_URL = 'https://localhost:7175';

export const getWeatherForecast = async (address: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/WeatherForecast/${encodeURIComponent(address)}`);
    console.log({response})
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};
