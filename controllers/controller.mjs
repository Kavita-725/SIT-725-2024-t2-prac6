import Subscription from '../models/model.mjs';

const saveSubscription = async (req, res) => {
    try {
        const newSubscription = new Subscription(req.body);
        await newSubscription.save();
        res.status(201).send('Subscription saved successfully');
    } catch (error) {
        res.status(400).send('Error saving subscription: ' + error.message);
    }
};

export default saveSubscription;
