import mongoose from "mongoose";

const url = process.env.MONGO_CONNECTION;
let cache = global.mongoose;

if (!cache) {
	cache = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	await mongoose.connect(url, { bufferCommands: false });
}

export default dbConnect;
