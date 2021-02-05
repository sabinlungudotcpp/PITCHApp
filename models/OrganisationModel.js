const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NUMBER_OF_BYTES = 10;

const organisationSchema = new mongoose.Schema({ // The organisation schema when registering a new organisation on the portal
    organisationName: { // The organisation name
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: false
    },

    mobileNumber: {
        type: Number,
        required: true,
        unique: true
    },

    country: {
        type: String,
        required: true,
        unique: false
    }
});

mongoose.model('Organisation', organisationSchema);