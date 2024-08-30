// const saveSubscription = require('../controllers/controller')
// const express = require('express')
// const router = express.Router()



// router.post('/subscribe', saveSubscription);
// //module.exports = router

// module.exports = router;

import express from 'express';
import saveSubscription from '../controllers/controller.mjs';

const router = express.Router();

router.post('/subscribe', saveSubscription);

export default router;
