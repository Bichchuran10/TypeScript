"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //used in client side (frontend)
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json()); //parse incoming json req bodies and use that data in other middleware
app.use(todos_1.default); //using todosRoutes as middleware
app.listen(3000);
