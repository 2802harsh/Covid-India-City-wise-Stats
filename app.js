const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const https = require("https");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var cityData = {
  confirmed: 0,
  active: 0,
  deceased:0,
  recovered:0,
  confDel:0,
  decDel:0,
  recDel:0
};

var covidData;
var location = {
  date: 0,
  state:"Select State and District First",
  district:"No Data to Show"
};


app.get("/", function (req, res) {
  location.date = date.getDate();
  res.render("index", {location:location, cityStats: cityData});

        // If user refreshes site after this, initial message shows up rather than the previous looked up search

        location.state="Select State and District First";
        location.district="No Data to Show";
        cityData = {confirmed:0, active:0, deceased: 0, recovered:0, confDel:0, decDel: 0, recDel: 0};
});

app.post("/", function (req, res) {
  location.state = req.body.state;
  location.district = req.body.district;
  //console.log(state + district);

  const url = "https://api.covid19india.org/state_district_wise.json";

  https.get(url, function (response) {
    var text = "";
    response.on("data", function (data) {
      text += data;
    });
    response.on("close", function () {
          try {
            covidData = JSON.parse(text);
            var city= covidData[location.state]["districtData"][location.district];
            cityData = {confirmed:city['confirmed'], active:city['active'], deceased: city['deceased'], recovered:city['recovered'], confDel: city['delta']['confirmed'], decDel: city['delta']['deceased'], recDel: city['delta']['recovered']};
          }
          catch(err) {
              location.district = "Not able to load the data for the city requested";
              location.state="Try viewing stats for some other city.";
              cityData = {confirmed:0, active:0, deceased: 0, recovered:0, confDel:0, decDel: 0, recDel: 0};
            }

      res.redirect("/");
    });
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server up and running");
});
