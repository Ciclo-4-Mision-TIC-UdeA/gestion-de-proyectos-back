import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(
    'mongodb+srv://admin:admin@testmongoose.k0loc.mongodb.net/mongoose-test?retryWrites=true&w=majority'
  );
};

export default connectDB;
