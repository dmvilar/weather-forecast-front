import { getWeatherForecast } from "../../src/services/WeatherService";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { date: "2024-01-22", minTemperature: -10, maxTemperature: 3 },
      ]),
  })
) as jest.Mock;

describe("getWeatherForecast", () => {
  test("fetches weather data from an API", async () => {
    const address = "1600 Pennsylvania Avenue NW, Washington, D.C. 20500, USA";
    const data = await getWeatherForecast(address);

    expect(fetch).toHaveBeenCalledWith(
      `https://localhost:7175/WeatherForecast/${encodeURIComponent(address)}`
    );
    expect(data).toEqual([
      { date: "2024-01-22", minTemperature: -10, maxTemperature: 3 },
    ]);
  });
});
