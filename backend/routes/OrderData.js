const express = require("express");
const router = express.Router();
const Order = require("../models/orders");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  let email = req.body.email;
  let order_date = req.body.order_date;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  await data.unshift({ Order_date: order_date });


  let eID = await Order.findOne({ email: email });

  if (eID === null) {
    try {
      await Order.create({
        email: email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.status(500).send("Server Error: " + error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: email },
        { $push: { order_data: data } },
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.status(500).send("Server Error: " + error.message);
    }
  }
});


router.post("/myOrderData", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    if (!myData) {
      return res.json({ orderData: [] });
    }

    res.json({ orderData: myData });
  } catch (error) {
    res.status(500).send("Server Error: " + error.message);
  }
});

module.exports = router;
