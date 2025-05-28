const express = require('express');
const router = express.Router();
const recruitmentController = require('../controller/RecruitmentController');

// ----- Job Posts -----
router.post('/jobposts', recruitmentController.createJobPost);
router.get('/jobposts', recruitmentController.getAllJobPosts);
router.get('/jobposts/:id', recruitmentController.getJobPostById);
router.put('/jobposts/:id', recruitmentController.updateJobPost);
router.delete('/jobposts/:id', recruitmentController.deleteJobPost);

// ----- Interviews -----
router.post('/interviews', recruitmentController.scheduleInterview);
router.get('/interviews', recruitmentController.getAllInterviews);
router.get('/interviews/:id', recruitmentController.getInterviewById);
router.put('/interviews/:id', recruitmentController.updateInterview);
router.delete('/interviews/:id', recruitmentController.deleteInterview);

// ----- Offers -----
router.post('/offers', recruitmentController.createOffer);
router.get('/offers', recruitmentController.getAllOffers);
router.get('/offers/:id', recruitmentController.getOfferById);
router.put('/offers/:id', recruitmentController.updateOffer);
router.delete('/offers/:id', recruitmentController.deleteOffer);

// ----- Reports -----
router.get('/report/:jobPostId', recruitmentController.getRecruitmentReport);

// ----- Candidates -----
router.post('/candidates', recruitmentController.createCandidate);
router.get('/candidates', recruitmentController.getAllCandidates);
router.get('/candidates/:id', recruitmentController.getCandidateById);
router.put('/candidates/:id', recruitmentController.updateCandidate);
router.delete('/candidates/:id', recruitmentController.deleteCandidate);

module.exports = router;
