import { UserModel as User } from "../../models/user";
import mongoose from "mongoose";

const createUser = async () => {
    try {


        await User.deleteMany({});

        const users = await User.insertMany([
            {
                email: 'don@test.com',
                password: '1234',
                username: 'Donny',
                turn: 99999999999,
                price: 0,
            },
            {
                email: 'ok@test.com',
                password: '1234',
                username: 'OK',
                turn: 3,
                price: 0,
            },
            {
                email: 'alice@test.com',
                password: '1234',
                username: 'Alice',
                turn: 3,
                price: 0,
            },
            {
                email: 'matthieu@test.com',
                password: '1234',
                username: 'Matthieu',
                turn: 3,
                price: 0,
            },
            {
                email: 'camille@test.com',
                password: '1234',
                username: 'Camille',
                turn: 3,
                price: 0,
            },
        ]);

        console.log('Users created:', users);
    } catch (error) {
        console.error('Error creating users:', error);
    }
};

async function seed() {
    try {
        await mongoose.connect('mongodb://localhost:27017/yummi-yams');
        await createUser();
    }
    catch (err) {
        console.error(err);
    }
}

seed();