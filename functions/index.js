const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HdalxIOxz9bJSuvUxHekAuBzGXBwEGjy2ZXOpNCBA6jSrUQ7N3yykcbyc3QN1tu0JnHIrcQwdlvwaFGEJrPSvKh00w4ccpfYL');

//API

// APP Config
const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send("Hello wrold!"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    // 201 = OK and creation applied
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// Listen
exports.api = functions.https.onRequest(app);
