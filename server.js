import application from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import stripeserver from 'stripe'
import bodyparser from 'body-parser'

// const app = require("express")()
// const cors = require('cors')
// const dotenv = require('dotenv')
const app = application()
dotenv.config()
// const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY)
const stripe = stripeserver(process.env.REACT_APP_SECRET_KEY)

// app.use(require("body-parser").text());
app.use(bodyparser.text())
app.use(cors())

app.get('/charge', function (req, res) {
  console.log("Hello World")
})

app.post('/charge', async (req, res) => {
  let bodyStuff = req.body.split('&')
  let token = bodyStuff[0]
  let amount = (parseInt(bodyStuff[1]) * 100).toString()
  try {
    let {status} = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "An example charge",
      source: token
    })
    res.json({status});
  }
  catch (err) {
    console.log("ERROR: ", err);
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"))
