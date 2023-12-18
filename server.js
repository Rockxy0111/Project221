const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'ranveer01.khokhar@gmail.com',
        pass: 'adnc rjdx hfmj ctuu',
    },
    secure: true,
});

server.listen(process.env.PORT || 3030);
//adnc rjdx hfmj ctuu