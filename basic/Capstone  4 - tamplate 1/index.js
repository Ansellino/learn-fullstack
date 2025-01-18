import express from "express";
import weatherRoute from "./routes/weather.js";
import settingsRoute from "./routes/settings.js";
import session from "express-session";


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(session({
    secret: 'your-secret-key',  // You can change this
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    const images = [
        "images/icons/weather.png",
        "images/icons/sunny.png",
        "images/icons/wind.png",
        "images/icons/heavy-rain.png",
    ];
    req.image = images[Math.floor(Math.random() * images.length)];
    next();
});

// Routes
app.use("/", weatherRoute);
app.use("/", settingsRoute);
// app.use("/",searchRoute);

app.get("/", (req, res) => {
    res.render("index", { image: req.image });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
