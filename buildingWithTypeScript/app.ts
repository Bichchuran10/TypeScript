import express from "express"; //used in client side (frontend)

import todosRoutes from './routes/todos'
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json()) //parse incoming json req bodies and use that data in other middleware

app.use(todosRoutes) //using todosRoutes as middleware
app.listen(3000)