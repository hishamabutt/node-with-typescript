import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI: string =
  'mongodb+srv://hisham:hisham123@cluster0.f0cqa.mongodb.net/<dbname>?retryWrites=true&w=majority';
const JWT_TOKEN: string = 'MyjwtKey';

export default {
  mongo: {
    mongoURI: MONGO_URI,
  },
  jwtSecret: JWT_TOKEN,
};
