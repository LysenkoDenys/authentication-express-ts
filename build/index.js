"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// initialize our application:
const app = (0, express_1.default)();
// now we can use object app to execute embedded methods
app.get('/', () => { });
