const env = require("dotenv").config({ path: "./.env" });
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const path = require('path')
const app = express()
const { resolve } = require("path");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
  });
  
 
  const STATIC_DIR = "./client";

  app.use(express.static(path.join(__dirname, STATIC_DIR)));

  app.get("/", (req, res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
  });
  
  app.get("/config", (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });
  
  app.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "EUR",
        amount: 2000,
        automatic_payment_methods: { enabled: true },
      });
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });
  

  const stripedat = require('stripe')('sk_test_51NGmTLFGErRxDdN8oXjMqmKLqMhcy1g46L0hvLAAtAhBqh5UGAR78RoND7ESev1CtwNNFnSm56QSzub5bquOlGDj00Rs3rUYo9');


  app.get('/stripe-data', async (req, res) => {
    try {
      const charges = await stripe.charges.list();
      const totalTransactions = charges.data.length;
  
      const transactions = charges.data.map((charge) => ({
        id: charge.id,
        amount: charge.amount,
        currency: charge.currency,
        status: charge.status,
        date: new Date(charge.created * 1000).toLocaleDateString(),
      }));
  
      const stripeData = {
        totalTransactions: totalTransactions,
        transactions: transactions,
      };
  
      res.json(stripeData);
    } catch (error) {
      console.error('Error fetching Stripe data:', error);
      res.status(500).json({ error: 'Error fetching Stripe data' });
    }
  });    



// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

//render home
// app.get('/', function(req, res){ 
// 	res.render('Home', { 
// 	key: Publishable_Key 
// 	}) 
// }) 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/campaignRouter'))
app.use('/payment', require('./routes/paymentRouter'))



// Connect to mongodb
const URI = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
};

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})