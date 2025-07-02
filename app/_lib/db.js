import mongoose from "mongoose";

const url = process.env.MONGO_CONNECTION;
let cache = global.mongoose;

// console.log(url)

if (!cache) {
	cache = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	
	
		// console.log("Connecting to MongoDB with URL:", url);
		await mongoose.connect(url, { bufferCommands: false });
	
}

export default dbConnect;
