import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://dotepeack:9AoHuT7dbob979c4@cluster0.yukp8.mongodb.net/'
        );
        console.log("Connected to DB");
    }catch (error) {
        console.error(error);
    }
}