import express from "express";
import axios from "axios";

const router = express.Router();
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/';
const apiKey = "2a05039d89a04d94bc965336251001";




// Define default location
const defaultLocation = { latitude: 40.7128, longitude: -74.0060 }; // Example: New York City
let weatherData = null;

router.post("/", async (req, res) => {
    let { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        console.log("No location provided, using default location.");
        latitude = defaultLocation.latitude;
        longitude = defaultLocation.longitude;
    }
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    try {
        // Fetch weather data using latitude and longitude
        const response = await axios.get(`${WEATHER_API_URL}/forecast.json`, {
            params: {
                key: apiKey,
                q: `${latitude},${longitude}`,
                days: 3,
            }
        });

        // Store weather data in the session
        req.session.weatherData = response.data;

        console.log("Weather data fetched and stored in session:", response.data);

        // Respond with a redirect URL
        res.status(200).json({
            redirectUrl: "/weather",
        });
    } catch (error) {
        console.error("Error fetching weather data:", error.message);

        // Handle error response
        res.status(500).json({
            message: "Failed to fetch weather data. Please try again later.",
        });
    }
});



function getDay(date){
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dateobj = new Date(date);
    const dayName = days[dateobj.getDay()]

    return dayName
}



router.post("/weather", async (req, res) => {
    const { city } = req.body;

    if (!city || city.trim() === "") {
        return res.status(400).json({
            message: "City name is required!",
        });
    }

    try {
        const response = await axios.get(`${WEATHER_API_URL}/forecast.json`, {
            params: {
                key: apiKey,
                q: city,
                days: 3,
            },
        });

        req.session.weatherData = response.data; // Store data in session
        res.redirect("/weather");

    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.status(500).send("Failed to fetch weather data. Please try again later.");
    }
});

















router.get("/weather", async (req, res) => {
    // Log the user settings to ensure they're being stored and retrieved
    console.log(req.session.userSettings);

    // Ensure user settings are available
    const userSettings = req.session.userSettings || {};

    // Default unit values if not available in user settings
    const tempUnit = userSettings.temp || "Celsius";   // Default to Celsius
    const windUnit = userSettings.wind || "km/h";      // Default to km/h
    const pressureUnit = userSettings.pressure || "hpa"; // Default to hpa
    const distanceUnit = userSettings.distance || "Kilometers"; // Default to Kilometers

    // Get weather data from the session
    const weatherData = req.session.weatherData;

    if (weatherData && weatherData.current) {
        const dayImg = weatherData.current.is_day
            ? "images/day-night/sun.png"
            : "images/day-night/moon.png";

        // Convert units based on user settings
        const conditions = [
            { title: "UV", icon: "images/condition-icons/uv.png", value: [`${weatherData.current.uv}`] },
            { title: "Feels like", icon: "images/condition-icons/thermometer.png", value: [
                `${tempUnit === "Celsius" ? weatherData.current.feelslike_c : weatherData.current.feelslike_f}°`
            ]},
            { title: "Wind", icon: "images/condition-icons/windy.png", value: [
                windUnit === "km/h" ? `${weatherData.current.gust_kph}km/h` : `${weatherData.current.gust_mph}mph`
            ]},
            { title: "Chances of rain", icon: "images/condition-icons/drop.png", value: [`${weatherData.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%`] },
            { title: "Humidity", icon: "images/condition-icons/shower.png", value: [`${weatherData.current.humidity}%`] },
            { title: "Pressure", icon: "images/condition-icons/barometer.png", value: [
                pressureUnit === "hpa" ? `${weatherData.current.pressure_mb}hpa` : `${weatherData.current.pressure_in}in`
            ]},
            { title: "Visibility", icon: "images/condition-icons/eye.png", value: [
                distanceUnit === "Kilometers" ? `${weatherData.current.vis_km}km` : `${weatherData.current.vis_miles}mi`
            ]},
            { title: "Sunrise", icon: "images/condition-icons/sunrise.png", value: [weatherData.forecast?.forecastday[0]?.astro?.sunrise || "N/A"] },
            { title: "Sunset", icon: "images/condition-icons/sunset.png", value: [weatherData.forecast?.forecastday[0]?.astro?.sunset || "N/A"] },
        ];

        // Handle the forecast data with unit conversion
        const FORECAST_TIMES = [6, 9, 12, 15, 18, 21];

        const todays = FORECAST_TIMES.map((hour) => {
            // Convert 24-hour format to 12-hour format
            const hourIn12HrFormat = hour % 12 === 0 ? 12 : hour % 12; // 12:00 PM should be 12, 0 should be handled as 12 PM
            const amPm = hour < 12 ? "AM" : "PM";

            return {
                time: `${hourIn12HrFormat}:00 ${amPm}`,
                img: weatherData.forecast.forecastday[0].hour[hour].condition.icon,
                temp: [
                    tempUnit === "Celsius" ? `${weatherData.forecast.forecastday[0].hour[hour].temp_c}°` : `${weatherData.forecast.forecastday[0].hour[hour].temp_f}°`
                ],
            };
        });

        // Handle daily forecast with unit conversion
        const forecast = weatherData.forecast.forecastday.map((dayData) => ({
            day: getDay(dayData.date),
            icon: dayData.day.condition.icon,
            text: dayData.day.condition.text,
            high: [
                tempUnit === "Celsius" ? `${dayData.day.maxtemp_c}°` : `${dayData.day.maxtemp_f}°`
            ],
            low: [
                tempUnit === "Celsius" ? `${dayData.day.mintemp_c}°` : `${dayData.day.mintemp_f}°`
            ],
        }));

        // Send the response with the updated settings and weather data
        res.render("weather", { image: req.image, dayImg, weatherData, conditions, todays, forecast });
    } else {
        res.status(500).send("Weather data not available.");
    }
});

export default router;
