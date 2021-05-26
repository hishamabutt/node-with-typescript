import mongoose from 'mongoose';
import config from './config';

const db: string = config.mongo.mongoURI;

const connectDB = async () => {
  try {
    let conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('mongoDB Connected...');
  } catch (err) {
    console.error(err.message);

    //Exit processs with failure
    process.exit(1);
  }
};

export = connectDB;
