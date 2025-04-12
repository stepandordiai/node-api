require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const proudctRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
var cors = require("cors");

const app = express();

// const PORT = process.env.PORT || 3000;
// const MONGO_URL = process.env.MONGO_URL;
// const FRONTEND = process.env.FRONTEND;

var corsOptions = {
    origin:
        "https://bourek.cz" || "https://lighthearted-scone-c30471.netlify.app/",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/product", proudctRoute);

app.get("/", (req, res) => {
    res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
    res.send("Hello Blog, My name is Devtamin");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
    .connect(
        "mongodb+srv://stepandordiaiBdWcumZOkcl:Overwatch1@stepandordiaiapi.1ocur.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=StepanDordiaiAPI"
    )
    .then(() => {
        console.log("connected to MongoDB");
        app.listen(3000, () => {
            console.log(`Node API app is running on port 3000`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
