const express = require("express");
const router = express.Router();
const Order = require('../models/orders');

// CHECKOUT ROUTE: Order save karne ke liye
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    let email = req.body.email;
    let order_date = req.body.order_date;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    // Array ke shuru mein Date add karna
    // Unshift behtar hai splice se
    await data.unshift({ Order_date: order_date });

    // Check if email exists
    let eID = await Order.findOne({ 'email': email });    
    
    if (eID === null) {
        try {
            await Order.create({
                email: email,
                order_data: [data]
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
                { $push: { order_data: data } }
            ).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            res.status(500).send("Server Error: " + error.message);
        }
    }
});

// FETCH ROUTE: Purane orders dekhne ke liye
router.post('/myOrderData', async (req, res) => {
    try {
        let myData = await Order.findOne({ 'email': req.body.email });
        res.json({ orderData: myData });
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
});

module.exports = router;