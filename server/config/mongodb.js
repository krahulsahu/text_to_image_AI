import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("MongoDB ✅");
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/image_ai`);
}
export default connectDB;
