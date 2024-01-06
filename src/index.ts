import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});