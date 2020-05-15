import mongoose from 'mongoose';

const cloudUrl =
  'mongodb+srv://denys:mongodb619@it-academy-bbkhn.mongodb.net/test?retryWrites=true&w=majority';

const url = process.env.MONGODB_URI || cloudUrl;

const initMongoDB = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connection is open to', url);
  });

  mongoose.connection.on('error', (err: Error) => {
    console.log(`Mongoose connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(
        'Mongoose connection is disconnected due to application termination'
      );
      process.exit(0);
    });
  });
};

export default initMongoDB;
