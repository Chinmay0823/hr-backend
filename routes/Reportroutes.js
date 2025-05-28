const express = require('express');
const router = express.Router();

const {
  createReport,
  getReports,
  updateReport,
  deleteReport
} = require('../controller/Reportcontroller');



module.exports = router;
