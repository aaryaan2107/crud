import mongoose from 'mongoose';

const connectDB  = async (DATABASE_URL) =>{
    try {

        const DB_OPTIONS = {
            dbname : 'college',
        }

        // await mongoose.connect(DATABASE_URL);
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);

        console.log('mongoDB was connect with express successfully....');
    } catch (err) {
        console.log(err);
    }
}

export default connectDB