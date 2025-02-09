const express = require('express')
const router = express.Router();
const {createChallenge,getAllChallenges,getChallengeById,updateChallenge,deleteChallenge} = require('../controllers/ChallengeController');


router.post('/challenges/create',createChallenge);

router.get('/challenges', getAllChallenges); 

router.get('/challenges/:id', getChallengeById); 

router.put('/challenges/:id', updateChallenge); 

router.get('/challenges/:id', getChallengeById);

router.delete('/challenges/:id', deleteChallenge);

module.exports = router;