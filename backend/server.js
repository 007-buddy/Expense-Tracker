require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// middleware to handle cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json());

connectDB();


// Simple test route for GET and POST
// app.get("/api/v1/auth/test", (req, res) => {
//   res.json({ message: "GET request successful!" });
// });

// app.post("/api/v1/auth/test", (req, res) => {
//   const { data } = req.body;
//   res.json({ message: "POST request successful!", received: data });
// });

// FIXED: Corrected route path from /api/vl/auth to /api/v1/auth
// app.use("/", (req, res)=>{
//     res.send("API is running....");
// })
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);


//server uploads folder
app.use('/uploads', express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
