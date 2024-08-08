import { MongoClient, ServerApiVersion } from "mongodb"

const MONGODB_URL = process.env.MONGODB_URL !!
const DB_NAME = process.env.DB_NAME !!

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

export const mongodbClient = new MongoClient(MONGODB_URL, options)

let isConnected = false;

export const connectDB = async() => {
  if(!isConnected){
    try{
      await mongodbClient.connect()
      console.log("Connected to MongoDB...");
      isConnected = true;
    }
    catch(error){
      console.log(error);
    }
  }

  return mongodbClient.db(DB_NAME);
}