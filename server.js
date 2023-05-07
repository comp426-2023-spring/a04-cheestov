#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from "./lib/rpsls.js";

const api = express();
api.use(express.json());

const args = minimist(process.argv.slice(2));
const PORT = args.port || 5000;
console.log(PORT);

api.get("/app/", (req, res, next) => {
    res.status(200).json({"message":"200 OK"});
});

api.get("app/rps", (req, res, next) => {
    const response = rps();
    res.status(200).json({response});
});

api.get("app/rpsls/", (req, res, next) => {
    const response = rpsls();
    res.status(200).json({response});
});

api.get("app/rps/play/", (req, res) => {
    const response = rps(req.query.shot);
    res.status(200).send(response);
});

api.post("app/rps/play", (req, res) => {
    const response = rps(req.body.shot);
    res.status(200).send(response);
});

api.get('/app/rpsls/play', (req, res) => {
    const response = rpsls(req.query.shot);
    res.status(200).send(response);
});

api.post("/app/rpsls/play", (req, res) => {
    const response = rpsls(req.body.shot);
    res.status(200).send(response);
});

api.get("/app/rps/play/:shot/", (req, res) => {
    const response = rps(req.params.shot);
    res.status(200).send(response);
});

api.get("app/rpsls/play/:shot/", (req, res) => {
    const response = rpsls(req.params.shot);
    res.status(200).send(response);
});

api.use(function(req, res) {
    res.status(404).json({"message":"404 NOT FOUND"});
});

api.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});