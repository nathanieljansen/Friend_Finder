//  Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

let friends = [
  {
  name: "Nathaniel Jansen",
  photo: "https://www.vmfit.com/wp-content/uploads/bfi_thumb/Nate-Jansen-n6twa2wmb95efg4wlmk3oqrr0gmesykmf5q9jfpmoc.jpg",
  scores: [
  "5",
  "3",
  "4",
  "5",
  "1",
  "1",
  "4",
  "5",
  "5",
  "5"
  ]},
{
  name: "Aiyanna",
  photo: "https://ih1.redbubble.net/image.215187520.1153/flat,800x800,075,t.u15.jpg",
  scores: [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
  ]},
  {
    name: "Elu",
    photo: "https://cmeimg-a.akamaihd.net/640/clsd/getty/fb24f58bd5ef463590a59cc961686ef0",
    scores: [
      "1",
      "1",
      "1",
      "1",
      "5",
      "1",
      "1",
      "1",
      "3",
      "5"
    ]
  },
  {
    name: "A Box",
    photo: "http://hackathon-in-a-box.org/img/box.png",
    scores: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    name: "My Buddy",
    photo: "https://images-na.ssl-images-amazon.com/images/I/81OqYKa3wwL._SY450_.jpg",
    scores: [
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  }
];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey.html", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/public/app.js", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/app.js"));
});

app.get("/public/style.css", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/style.css"));
});

app.get("/api/friends", function (req, res) {
  return res.json(friends);
});

app.post('/api/friends', function (req, res) {
  friends.push(req.body);
  res.json({ success: true });
})


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});





