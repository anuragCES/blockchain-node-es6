import Express from "express";
import BodyParser from "body-parser";
import WebSocket from "ws";

const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2P_PORT = process.env.P2P_PORT || 6001;

function initHttpServer() {
    const app = new Express();
    app.use(BodyParser.json());

    app.get("/ping", (req, res) => res.send("Knock Knock!!"));
    app.listen(HTTP_PORT, () => console.log("Listening http on port: " + HTTP_PORT));
};

function initP2PServer() {
    var server = new WebSocket.Server({port: P2P_PORT});
    server.on("connection", ws => initConnection(ws));
    console.log("listening websocket p2p port on: " + P2P_PORT);
};

initHttpServer();
initP2PServer();