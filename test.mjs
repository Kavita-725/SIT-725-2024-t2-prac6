// import * as chai from 'chai';
// import chaiHttp from 'chai-http';
// import mongoose from 'mongoose';
// import app from './server_get.mjs'; // Make sure this file is correctly exporting 'app'
// import Subscription from './models/model.mjs'; // Ensure this file uses .mjs extension

// // Configure Chai to use chai-http
// chai.use(chaiHttp);
// const {expect} = chai;

// console.log('chai.request:', chai.request); // Debug line

// describe('Subscription API Tests', function() {
//     // Connect to MongoDB before running tests
//     before(async function() {
//         await mongoose.connect("mongodb+srv://anandishika07:mALobWvqSSCEVVoM@cluster0.jfdvplt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//     });

//     // Clean up the database after each test
//     afterEach(async function() {
//         await Subscription.deleteMany({});
//     });

//     // Close MongoDB connection after all tests
//     after(async function() {
//         await mongoose.connection.close();
//     });

//     it('should save a subscription when valid data is provided', function(done) {
//         chai.request(app)
//             .post('/subscribe')
//             .send({
//                 fullName: 'John Doe',
//                 email: 'john.doe@example.com'
//             })
//             .end((err, res) => {
//                 if (err) return done(err);

//                 expect(res).to.have.status(201);
//                 expect(res.text).to.equal('Subscription saved successfully');

//                 Subscription.findOne({ email: 'john.doe@example.com' }, (err, subscription) => {
//                     if (err) return done(err);
//                     expect(subscription).to.not.be.null;
//                     expect(subscription.fullName).to.equal('John Doe');
//                     expect(subscription.email).to.equal('john.doe@example.com');
//                     done();
//                 });
//             });
//     });
// });

// import request from 'supertest';
// import mongoose from 'mongoose';
// import app from './server_get.mjs'; // Adjust path if needed
// import Subscription from './models/model.mjs'; // Adjust path if needed

// describe('Subscription API Tests', function() {
//     // Connect to MongoDB before running tests
//     before(async function() {
//         await mongoose.connect("mongodb+srv://anandishika07:mALobWvqSSCEVVoM@cluster0.jfdvplt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//     });

//     // Clean up the database after each test
//     afterEach(async function() {
//         await Subscription.deleteMany({});
//     });

//     // Close MongoDB connection after all tests
//     after(async function() {
//         await mongoose.connection.close();
//     });

//     it('should save a subscription when valid data is provided', function(done) {
//         request(app)
//             .post('/subscribe')
//             .send({
//                 fullName: 'John Doe',
//                 email: 'john.doe@example.com'
//             })
//             .expect(201)
//             .expect('Subscription saved successfully')
//             .end((err, res) => {
//                 if (err) return done(err);

//                 Subscription.findOne({ email: 'john.doe@example.com' }, (err, subscription) => {
//                     if (err) return done(err);
//                     expect(subscription).to.not.be.null;
//                     expect(subscription.fullName).to.equal('John Doe');
//                     expect(subscription.email).to.equal('john.doe@example.com');
//                     done();
//                 });
//             });
//     });
// });


import request from 'supertest';
import mongoose from 'mongoose';
import app from './server_get.mjs'; // Adjust path if needed
import Subscription from './models/model.mjs'; // Adjust path if needed
import { expect } from 'chai'; // Make sure to import expect

describe('Subscription API Tests', function() {
    // Connect to MongoDB before running tests
    before(async function() {
        await mongoose.connect("mongodb+srv://anandishika07:mALobWvqSSCEVVoM@cluster0.jfdvplt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    // Clean up the database after each test
    afterEach(async function() {
        await Subscription.deleteMany({});
    });

    // Close MongoDB connection after all tests
    after(async function() {
        await mongoose.connection.close();
    });

    it('should save a subscription when valid data is provided', async function() {
        await request(app)
            .post('/subscribe')
            .send({
                fullName: 'John Doe',
                email: 'john.doe@example.com'
            })
            .expect(201)
            .expect('Subscription saved successfully');

        const subscription = await Subscription.findOne({ email: 'john.doe@example.com' }).exec();
        expect(subscription).to.not.be.null;
        expect(subscription.fullName).to.equal('John Doe');
        expect(subscription.email).to.equal('john.doe@example.com');
    });
});
