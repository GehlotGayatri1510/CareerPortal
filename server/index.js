
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 TEMP test route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// 👉 Razorpay setup (use test keys or dummy for now)
const razorpay = new Razorpay({
  key_id: "rzp_test_SmA82EMZ8ESYj8",
  key_secret: "j7CCQqpyym7mwUewwdjE7T35",
});

// 👉 Create order API
app.post("/create-order", async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: 79900,
      currency: "INR",
    });

    res.json(order);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).send("Error creating order");
  }
});

// 👉 START SERVER (MOST IMPORTANT)
app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});