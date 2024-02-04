#!/usr/bin/env node
// @ts-check

import { Server } from "./server.js"

const useHttps = process.env.USE_HTTPS == "true"
const cert = process.env.HTTPS_CERT
const key = process.env.HTTPS_KEY

new Server(useHttps, { cert, key })
