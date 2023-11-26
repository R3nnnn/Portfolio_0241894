const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);


app.get("/", (req, res) => {
  res.render("index")
});

app.get("/city", (req, res) => {
  const city_name = req.query.cityName;
  const apiKey = "1e9a8c71549013b72dc0b28d2d7f64c9";

  https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`, (apiRes) => {
    let data = "";

    apiRes.on("data", (chunk) => {
      data += chunk;
    });

    apiRes.on("end", () => {
      try {

        const weatherD = JSON.parse(data);

        const tKelvin = weatherD.main.temp;
        
        const tCelsius = tKelvin - 273.15;

        const roundedTemp = tCelsius.toFixed(2);

        const icon = weatherD.weather[0].icon;

        res.render("city", { city_name: city_name, temperature: roundedTemp, icon: icon, error: null });
      } catch (error) {
        console.error("Error al procesar la respuesta de la API de OpenWeather:", error);
        res.render("city", { city_name: city_name, error: "Error al obtener datos del clima" });
      }
    });
  }).on("error", (error) => {
    console.error("Error al realizar la solicitud a la API de OpenWeather:", error);
    res.render("city", { city_name: city_name, error: "Error al obtener datos del clima" });
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});