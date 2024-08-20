import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./presentation/routes/generalRouter"
import connectDb from "./config/db/connect"
import { kafkaConsumer } from "./infrastructure/brokers/kafkaBroker/kafkaConsumer" 

const app = express()
dotenv.config()
const allowedOrigins = [
  'https://al-midan-frontend.vercel.app',
  'https://localhost:3000',
  'http://13.71.112.129',
  'https://peducoggsc.execute-api.ap-south-1.amazonaws.com'
];
const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

async function startApp() {
  try {
    await connectDb;
    console.log('MongoDB connected successfully');

    await kafkaConsumer.init();
    console.log('Kafka consumer initialized successfully');

    const PORT = process.env.PORT || 5003;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error starting the application:', err);
    process.exit(1);
  }
}

startApp();