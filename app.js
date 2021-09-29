/** Simple demo Express app. */

const express = require("express");
const { convertStrNums } = require("./utils.js")
const { findMean, findMedian, findMode } = require("./stats.js")
const app = express();

// useful error class to throw
const { NotFoundError } = require("./expressError");

const MISSING = "Expected key `nums` with comma-separated list of numbers.";


/** Finds mean of nums in qs: returns {operation: "mean", result } */
app.get('/mean?:nums', function (req, res) {
  let values = req.query.nums;
  // console.log("values", values)
  // console.log(typeof values)
  // console.log(Array.isArray(values))
  // debugger
  let nums = convertStrNums(values);

  let meanValue = findMean(nums);
  return res.json({ operation: "mean", value: meanValue });
})

/** Finds median of nums in qs: returns {operation: "median", result } */
app.get('/median', function (req, res) {

})

/** Finds mode of nums in qs: returns {operation: "mode", result } */
app.get('/mode', function (req, res) {

})

/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});



module.exports = app;