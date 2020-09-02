// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.get("/", (req, res) => {
        app.render(req, res, "/");
    });
    server.get("*", (req, res) => {
        return handle(req, res)
    });
    server.listen(3000, err => {
        if (err) throw err;
        console.log("now serving localhost:3000")
    })
});
