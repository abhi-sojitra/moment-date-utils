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

/**
 * Get the current month.
 * @returns {number} Current month (1-12).
 */
function getCurrentMonth() {
  return moment().month() + 1; // Adding 1 because Moment.js months are zero-based
}

/**
 * Get the current year.
 * @returns {number} Current year (YYYY).
 */
function getCurrentYear() {
  return moment().year();
}

/**
 * Get the current day of the month.
 * @returns {number} Current day of the month (1-31).
 */
function getCurrentDay() {
  return moment().date();
}

/**
 * Get the current time formatted as 'HH:mm:ss'.
 * @returns {string} Current time string in 'HH:mm:ss' format.
 */
function getCurrentTime() {
  return moment().format("HH:mm:ss");
}

/**
 * Get the relative time from now for a given date.
 * @param {Date|string} date - The date to get the relative time for.
 * @returns {string} Relative time string (e.g., 'just now', '2 minutes ago').
 */
function getRelativeTime(date) {
  return moment(date).fromNow();
}

/**
 * Get the current time in a specific time zone.
 * @param {string} timeZone - The time zone to get the current time for.
 * @returns {string} Current time in the specified time zone.
 */
function getCurrentTimeInTimeZone(timeZone) {
  return moment.tz(timeZone).format();
}

/**
 * Convert time from one time zone to another.
 * @param {string} time - The time to convert.
 * @param {string} fromTimeZone - The time zone to convert from.
 * @param {string} toTimeZone - The time zone to convert to.
 * @returns {string} Converted time in the target time zone.
 */
function convertTimeBetweenTimeZones(time, fromTimeZone, toTimeZone) {
  return moment.tz(time, fromTimeZone).tz(toTimeZone).format();
}

/**
 * Get the time difference in hours between two time zones.
 * @param {string} timeZone1 - The first time zone.
 * @param {string} timeZone2 - The second time zone.
 * @returns {number} Time difference in hours.
 */
function getTimeDifferenceBetweenTimeZones(timeZone1, timeZone2) {
  const now = moment();
  const timeZone1Offset = moment.tz(now, timeZone1).utcOffset();
  const timeZone2Offset = moment.tz(now, timeZone2).utcOffset();
  return (timeZone2Offset - timeZone1Offset) / 60; // Convert minutes to hours
}

/**
 * Format a time in a specific time zone with a given format.
 * @param {string} time - The time to format.
 * @param {string} timeZone - The time zone to format the time in.
 * @param {string} format - The format string.
 * @returns {string} Formatted time.
 */
function formatTimeInTimeZone(time, timeZone, format) {
  return moment.tz(time, timeZone).format(format);
}

/**
 * Get all available time zones.
 * @returns {string[]} Array of all available time zones.
 */
function getAllTimeZones() {
  return moment.tz.names();
}

/**
 * Add or subtract time from a date.
 * @param {Date|string} date - The date to modify.
 * @param {number} value - The amount of time to add/subtract.
 * @param {string} unit - The unit of time (e.g., 'days', 'months', 'years').
 * @returns {string} Modified date.
 */
function addTime(date, value, unit) {
  return moment(date).add(value, unit).format();
}

function subtractTime(date, value, unit) {
  return moment(date).subtract(value, unit).format();
}

/**
 * Get the start of a day, week, month, or year.
 * @param {Date|string} date - The date to get the start for.
 * @param {string} unit - The unit of time (e.g., 'day', 'week', 'month', 'year').
 * @returns {string} Start of the specified unit.
 */
function getStartOf(date, unit) {
  return moment(date).startOf(unit).format();
}

/**
 * Get the end of a day, week, month, or year.
 * @param {Date|string} date - The date to get the end for.
 * @param {string} unit - The unit of time (e.g., 'day', 'week', 'month', 'year').
 * @returns {string} End of the specified unit.
 */
function getEndOf(date, unit) {
  return moment(date).endOf(unit).format();
}

/**
 * Get the number of days in a month for a given date.
 * @param {Date|string} date - The date to get the number of days for.
 * @returns {number} Number of days in the month.
 */
function getDaysInMonth(date) {
  return moment(date).daysInMonth();
}

/**
 * Check if a date is a weekend.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is a weekend, false otherwise.
 */
function isWeekend(date) {
  const day = moment(date).day();
  return day === 0 || day === 6;
}

/**
 * Get the week number for a given date.
 * @param {Date|string} date - The date to get the week number for.
 * @returns {number} Week number.
 */
function getWeekNumber(date) {
  return moment(date).week();
}

/**
 * Parse an ISO 8601 date string and format it to a specified format.
 * @param {string} isoDate - The ISO 8601 date string to parse.
 * @param {string} format - The format string.
 * @returns {string} Formatted date.
 */
function parseAndFormatISODate(isoDate, format) {
  return moment(isoDate).format(format);
}

/**
 * Check if a date falls in a leap year.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is in a leap year, false otherwise.
 */
function isLeapYear(date) {
  return moment(date).isLeapYear();
}

/**
 * Get the quarter of the year for a given date.
 * @param {Date|string} date - The date to get the quarter for.
 * @returns {number} Quarter of the year (1-4).
 */
function getQuarter(date) {
  return moment(date).quarter();
}

/**
 * Get the ISO week of the year for a given date.
 * @param {Date|string} date - The date to get the ISO week for.
 * @returns {number} ISO week of the year.
 */
function getISOWeek(date) {
  return moment(date).isoWeek();
}

/**
 * Add a specified number of weeks to a date.
 * @param {Date|string} date - The date to add weeks to.
 * @param {number} weeks - The number of weeks to add.
 * @returns {Date} New date with weeks added.
 */
function addWeeks(date, weeks) {
  return moment(date).add(weeks, "weeks").toDate();
}

/**
 * Subtract a specified number of weeks from a date.
 * @param {Date|string} date - The date to subtract weeks from.
 * @param {number} weeks - The number of weeks to subtract.
 * @returns {Date} New date with weeks subtracted.
 */
function subtractWeeks(date, weeks) {
  return moment(date).subtract(weeks, "weeks").toDate();
}

/**
 * Get the number of business days between two dates.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {number} Number of business days.
 */
function getBusinessDays(startDate, endDate) {
  let start = moment(startDate);
  let end = moment(endDate);
  let businessDays = 0;

  while (start.isBefore(end)) {
    if (start.day() !== 0 && start.day() !== 6) {
      // Exclude weekends
      businessDays++;
    }
    start.add(1, "days");
  }

  return businessDays;
}

/**
 * Get the number of days until a specified date.
 * @param {Date|string} date - The date to calculate days until.
 * @returns {number} Number of days until the specified date.
 */
function getDaysUntilDate(date) {
  return moment(date).diff(moment(), "days");
}

/**
 * Check if a date is in Daylight Saving Time.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is in Daylight Saving Time, false otherwise.
 */
function isDaylightSavingTime(date) {
  return moment(date).isDST();
}

/**
 * Get the first day of a specified month.
 * @param {number} year - The year of the month.
 * @param {number} month - The month (1-12).
 * @returns {Date} The first day of the month.
 */
function getFirstDayOfMonth(year, month) {
  return moment([year, month - 1])
    .startOf("month")
    .toDate();
}

/**
 * Get the last day of a specified month.
 * @param {number} year - The year of the month.
 * @param {number} month - The month (1-12).
 * @returns {Date} The last day of the month.
 */
function getLastDayOfMonth(year, month) {
  return moment([year, month - 1])
    .endOf("month")
    .toDate();
}

/**
 * Get the first day of a specified quarter.
 * @param {number} year - The year of the quarter.
 * @param {number} quarter - The quarter (1-4).
 * @returns {Date} The first day of the quarter.
 */
function getFirstDayOfQuarter(year, quarter) {
  return moment([year]).quarter(quarter).startOf("quarter").toDate();
}

/**
 * Get the last day of a specified quarter.
 * @param {number} year - The year of the quarter.
 * @param {number} quarter - The quarter (1-4).
 * @returns {Date} The last day of the quarter.
 */
function getLastDayOfQuarter(year, quarter) {
  return moment([year]).quarter(quarter).endOf("quarter").toDate();
}

/**
 * Get the first day of a specified year.
 * @param {number} year - The year.
 * @returns {Date} The first day of the year.
 */
function getFirstDayOfYear(year) {
  return moment([year]).startOf("year").toDate();
}

/**
 * Get the last day of a specified year.
 * @param {number} year - The year.
 * @returns {Date} The last day of the year.
 */
function getLastDayOfYear(year) {
  return moment([year]).endOf("year").toDate();
}

/**
 * Get all weekdays between two dates.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {Date[]} Array of weekdays between the two dates.
 */
function getWeekdays(startDate, endDate) {
  let start = moment(startDate);
  let end = moment(endDate);
  let weekdays = [];

  while (start.isBefore(end)) {
    if (start.day() !== 0 && start.day() !== 6) {
      // Exclude weekends
      weekdays.push(start.toDate());
    }
    start.add(1, "days");
  }

  return weekdays;
}

/**
 * Get the name of a month from a date.
 * @param {Date|string} date - The date to get the month name from.
 * @returns {string} Name of the month.
 */
function getMonthName(date) {
  return moment(date).format("MMMM");
}

/**
 * Get the name of a day from a date.
 * @param {Date|string} date - The date to get the day name from.
 * @returns {string} Name of the day.
 */
function getDayName(date) {
  return moment(date).format("dddd");
}

/**
 * Format a date to RFC 2822 string.
 * @param {Date|string} date - The date to format.
 * @returns {string} Date formatted as RFC 2822 string.
 */
function formatToRFC2822(date) {
  return moment(date).format("ddd, DD MMM YYYY HH:mm:ss ZZ");
}

/**
 * Format a date to Unix timestamp.
 * @param {Date|string} date - The date to format.
 * @returns {number} Date formatted as Unix timestamp.
 */
function formatToUnix(date) {
  return moment(date).unix();
}

/**
 * Get the time difference between two dates in specified units (days, hours, minutes, etc.).
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @param {string} unit - The unit to get the difference in ('days', 'hours', 'minutes', etc.).
 * @returns {number} Time difference in the specified unit.
 */
function getTimeDifferenceInUnits(startDate, endDate, unit) {
  return moment(endDate).diff(moment(startDate), unit);
}

/**
 * Get the date a specified number of days from now.
 * @param {number} days - The number of days from now.
 * @returns {Date} The date a specified number of days from now.
 */
function getDaysFromNow(days) {
  return moment().add(days, "days").toDate();
}

/**
 * Get the date a specified number of weeks from now.
 * @param {number} weeks - The number of weeks from now.
 * @returns {Date} The date a specified number of weeks from now.
 */
function getWeeksFromNow(weeks) {
  return moment().add(weeks, "weeks").toDate();
}

/**
 * Get the date a specified number of months from now.
 * @param {number} months - The number of months from now.
 * @returns {Date} The date a specified number of months from now.
 */
function getMonthsFromNow(months) {
  return moment().add(months, "months").toDate();
}

/**
 * Get the date a specified number of years from now.
 * @param {number} years - The number of years from now.
 * @returns {Date} The date a specified number of years from now.
 */
function getYearsFromNow(years) {
  return moment().add(years, "years").toDate();
}

/**
 * Check if a date is between two other dates.
 * @param {Date|string} date - The date to check.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {boolean} True if the date is between the start and end dates, false otherwise.
 */
function isBetween(date, startDate, endDate) {
  return moment(date).isBetween(startDate, endDate);
}

/**
 * Check if a date is the same or before another date.
 * @param {Date|string} date - The date to check.
 * @param {Date|string} compareDate - The date to compare to.
 * @returns {boolean} True if the date is the same or before the compare date, false otherwise.
 */
function isSameOrBefore(date, compareDate) {
  return moment(date).isSameOrBefore(compareDate);
}

/**
 * Check if a date is the same or after another date.
 * @param {Date|string} date - The date to check.
 * @param {Date|string} compareDate - The date to compare to.
 * @returns {boolean} True if the date is the same or after the compare date, false otherwise.
 */
function isSameOrAfter(date, compareDate) {
  return moment(date).isSameOrAfter(compareDate);
}

/**
 * Check if a date is a specified holiday (customizable for different holidays).
 * @param {Date|string} date - The date to check.
 * @param {Date[]} holidays - Array of holiday dates.
 * @returns {boolean} True if the date is a holiday, false otherwise.
 */
function isHoliday(date, holidays) {
  return holidays.some((holiday) => moment(date).isSame(holiday, "day"));
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
  getCurrentMonth,
  getCurrentYear,
  getCurrentDay,
  getCurrentTime,
  getRelativeTime,
  getCurrentTimeInTimeZone,
  convertTimeBetweenTimeZones,
  getTimeDifferenceBetweenTimeZones,
  formatTimeInTimeZone,
  getAllTimeZones,
  addTime,
  subtractTime,
  getStartOf,
  getEndOf,
  getDaysInMonth,
  isWeekend,
  getWeekNumber,
  parseAndFormatISODate,
  isLeapYear,
  getQuarter,
  getISOWeek,
  addWeeks,
  subtractWeeks,
  getBusinessDays,
  getDaysUntilDate,
  isDaylightSavingTime,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getFirstDayOfQuarter,
  getLastDayOfQuarter,
  getFirstDayOfYear,
  getLastDayOfYear,
  getWeekdays,
  getMonthName,
  getDayName,
  formatToRFC2822,
  formatToUnix,
  getTimeDifferenceInUnits,
  getDaysFromNow,
  getWeeksFromNow,
  getMonthsFromNow,
  getYearsFromNow,
  isBetween,
  isSameOrBefore,
  isSameOrAfter,
  isHoliday,
};
