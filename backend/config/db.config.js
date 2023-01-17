const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.connect(
            'mongodb+srv://dbUser:dbUser@zaka-temp-monitor-orbvm.mongodb.net/test?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true },
        );

        console.log('Connected to MongoDB...');
    } catch (err) {
        console.error('Connection failed...', err);
    }
}

module.exports.connectToDB = connectToDB;
