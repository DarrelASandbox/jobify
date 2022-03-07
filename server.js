import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/connect.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
