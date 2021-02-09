const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Package to encrypt password
const NUMBER_OF_BYTES = 10; // Number of bytes to encrypt the user data

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

    password: {
        type: String,
        required: true,
        unique: false
    }
});

organisationSchema.pre('save', function(next) {
    const organisation = this;
    
    if(!organisation.isModified('password')) { // If the password has not been modified
        return next();
    }
});

organisationSchema.methods.comparePassword = function(candidatePassword) {
    const organisation = this;
}

mongoose.model('Organisation', organisationSchema); // Create an organisation model