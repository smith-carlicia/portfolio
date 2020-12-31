const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// client route
const clientRoute = require("./routes/client");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("client"));

// server routes
app.use(clientRoute);

app.listen(PORT, function() {
    console.log("App listening to PORT")
});

