
import dotenv from 'dotenv';
dotenv.config({ override: true });
import express from 'express';
import mongoose from 'mongoose';
import User from "./models/User.js";
 
const app = express();
app.use(express.json());
 
// Database connection logic
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully! ");
    } catch (error) {
        console.error("MongoDB connection failed: ", error.message);
        process.exit(1);
    }
};
 
connectDB();

app.post('/api/test-setup', async (req, res) => {
    try {
        const { username, email, role } = req.body;
 
        const newUser = await User.create({
            username: username,
            email: email,
            role: role
        });
 
        res.status(200).json({
            message: "Database successfully populated!",
            user: newUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
 
const PORT = 5100;
app.listen(PORT, () => {
    console.log(`Server actively running on port ${PORT}`);
});
