#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from "./lib/rpsls.js";

const api = express();
api.use(express.json());

const args = minimist(process,argv.slice(2));
const port = args.port || 5000;

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
    const response = rps(req.body.shot);
    res.status(200).send(response);
});