import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import userRouter from "./routes";
import { specs } from "./swagger/swagger";

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}/api-docs`);
});
