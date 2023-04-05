import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Payment Service');
});

app.post('/payments', async (req, res) => {
  try {
    const amount = req.body.amount;
    // Send customer a notification of payment received
    // Uses AWS Service Connect namespace
    await axios.post('http://seamless-demo-notification:3000/notifications', {
      message: `You paid $${amount}. Thanks for being a customer!!`,
    });

    res.status(200).json({
      message:
        'Payment was received, and notification was sent to the customer',
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    res.status(500).send('Error with Notification Service');
  }
});

export default app;
