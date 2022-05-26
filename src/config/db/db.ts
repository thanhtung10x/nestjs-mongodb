import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/nestjs';
export const DB = {
  connect: async () => {
    try {
      await mongoose.connect(url);
      console.log('[ DATABASE ] [ MONGODB: CONNECT SUCCESSFULL !!! ]');
    } catch (err) {
      console.log('[ DATABASE ] [ MONGODB: CONNECT UNSUCCESSFULL !!! ]');
    }
  },
};
