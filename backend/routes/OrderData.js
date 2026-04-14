const express = require("express");
const router = express.Router();
const Order = require('../models/orders');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    let email = req.body.email;
    let order_date = req.body.order_date;

    // 1. Validation: Agar email nahi hai to error dein
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    // 2. Data Modification: 
    // Array ke shuru mein Date object add karein (Circular loop se bachne ke liye direct date use karein)
    await data.splice(0, 0, { Order_date: order_date });

    // 3. Check karein ke user ka purana koi order record hai ya nahi
    let eID = await Order.findOne({ 'email': email });    
    console.log("Existing Record Check:", eID);

    if (eID === null) {
        // Case: Naya User (Pehli baar order kar raha hai)
        try {
            await Order.create({
                email: email,
                order_data: [data] // Array of arrays format
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log("Create Error:", error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    } else {
        // Case: Purana User (Pehle se record exist karta hai)
        try {
            await Order.findOneAndUpdate(
                { email: email },
                { $push: { order_data: data } } // Naya order purane array mein push kar dein
            ).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log("Update Error:", error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    }
});

module.exports = router;