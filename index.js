const moment = require("moment");

/**
 * Format a given date to 'YYYY-MM-DD' format.
 * @param {Date} date - The date to format.
 * @returns {string} Formatted date string.
 */
function formatDate(date) {
  return moment(date).format("YYYY-MM-DD");
}

/**
 * Format a given date to 'HH:mm:ss' format.
 * @param {Date} date - The date to format.
 * @returns {string} Formatted time string.
 */
function formatTime(date) {
  return moment(date).format("HH:mm:ss");
}

/**
 * Format a given date to 'YYYY-MM-DD HH:mm:ss' format.
 * @param {Date} date - The date to format.
 * @returns {string} Formatted date and time string.
 */
function formatDateTime(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

/**
 * Format a given date using a custom format string.
 * @param {Date} date - The date to format.
 * @param {string} formatString - The custom format string (e.g., 'dddd, MMMM Do YYYY, h:mm:ss a').
 * @returns {string} Formatted date string.
 */
function formatCustom(date, formatString) {
  return moment(date).format(formatString);
}

/**
 * Get the current date and the date 7 days ago.
 * @returns {object} Object with 'currentDate' and 'sevenDaysAgoDate' properties formatted as 'YYYY-MM-DD'.
 */
function getLast7Days() {
  const today = moment();
  const sevenDaysAgo = moment().subtract(7, "days");
  return {
    currentDate: today.format("YYYY-MM-DD"),
    sevenDaysAgoDate: sevenDaysAgo.format("YYYY-MM-DD"),
  };
}

/**
 * Get the current date and the date 30 days ago.
 * @returns {object} Object with 'currentDate' and 'thirtyDaysAgoDate' properties formatted as 'YYYY-MM-DD'.
 */
function getLast30Days() {
  const today = moment();
  const thirtyDaysAgo = moment().subtract(30, "days");
  return {
    currentDate: today.format("YYYY-MM-DD"),
    thirtyDaysAgoDate: thirtyDaysAgo.format("YYYY-MM-DD"),
  };
}

/**
 * Get the current date and the date 3 months ago.
 * @returns {object} Object with 'currentDate' and 'threeMonthsAgoDate' properties formatted as 'YYYY-MM-DD'.
 */
function getLast3Months() {
  const today = moment();
  const threeMonthsAgo = moment().subtract(3, "months");
  return {
    currentDate: today.format("YYYY-MM-DD"),
    threeMonthsAgoDate: threeMonthsAgo.format("YYYY-MM-DD"),
  };
}

/**
 * Get the current date and the date 7 months ago.
 * @returns {object} Object with 'currentDate' and 'sevenMonthsAgoDate' properties formatted as 'YYYY-MM-DD'.
 */
function getLast7Months() {
  const today = moment();
  const sevenMonthsAgo = moment().subtract(7, "months");
  return {
    currentDate: today.format("YYYY-MM-DD"),
    sevenMonthsAgoDate: sevenMonthsAgo.format("YYYY-MM-DD"),
  };
}

/**
 * Format a given date to 'h:mm A' format (e.g., '3:30 PM').
 * @param {Date} date - The date to format.
 * @returns {string} Formatted time string with AM/PM.
 */
function formatTimeWithAMPM(date) {
  return moment(date).format("h:mm A");
}

/**
 * Calculate the total number of days between two dates (inclusive of both start and end dates).
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {number} Total number of days between startDate and endDate.
 */
function getDaysCount(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, "days") + 1; // Adding 1 to include both start and end dates
}

module.exports = {
  formatDate,
  formatTime,
  formatDateTime,
  formatCustom,
  getLast7Days,
  getLast30Days,
  getLast3Months,
  getLast7Months,
  formatTimeWithAMPM,
  getDaysCount,
};
