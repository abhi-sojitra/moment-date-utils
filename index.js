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

/**
 * Check if a date is a weekday.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is a weekday, false otherwise.
 */
function isWeekday(date) {
  const day = moment(date).day();
  return day >= 1 && day <= 5;
}

/**
 * Get the number of weeks in a year.
 * @param {number} year - The year to check.
 * @returns {number} The number of weeks in the specified year.
 */
function getWeeksInYear(year) {
  return moment(`${year}-12-31`).isoWeeks();
}

/**
 * Calculate the age based on a given birth date.
 * @param {Date|string} birthDate - The birth date.
 * @returns {number} The age in years.
 */
function calculateAge(birthDate) {
  return moment().diff(moment(birthDate), "years");
}

/**
 * Check if a date is today.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is today, false otherwise.
 */
function isToday(date) {
  return moment(date).isSame(new Date(), "day");
}

/**
 * Check if a date is in the past.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is in the past, false otherwise.
 */
function isPast(date) {
  return moment(date).isBefore(new Date(), "day");
}

/**
 * Check if a date is in the future.
 * @param {Date|string} date - The date to check.
 * @returns {boolean} True if the date is in the future, false otherwise.
 */
function isFuture(date) {
  return moment(date).isAfter(new Date(), "day");
}

/**
 * Get the start of the next month.
 * @returns {Date} The start of the next month.
 */
function getStartOfNextMonth() {
  return moment().add(1, "months").startOf("month").toDate();
}

/**
 * Get the end of the previous month.
 * @returns {Date} The end of the previous month.
 */
function getEndOfPreviousMonth() {
  return moment().subtract(1, "months").endOf("month").toDate();
}

/**
 * Get the total number of days between two dates.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {number} The total number of days between the two dates.
 */
function getTotalDaysBetween(startDate, endDate) {
  return moment(endDate).diff(moment(startDate), "days");
}

/**
 * Get the total number of business days between two dates.
 * @param {Date|string} startDate - The start date.
 * @param {Date|string} endDate - The end date.
 * @returns {number} The total number of business days between the two dates.
 */
function getTotalBusinessDaysBetween(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);
  let totalBusinessDays = 0;

  while (start.isBefore(end)) {
    if (start.day() !== 0 && start.day() !== 6) {
      totalBusinessDays++;
    }
    start.add(1, "days");
  }

  return totalBusinessDays;
}

/**
 * Get the next occurrence of a specific day of the week.
 * @param {Date|string} date - The reference date.
 * @param {number} dayOfWeek - The day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns {Date} The next occurrence of the specified day of the week.
 */
function getNextDayOfWeek(date, dayOfWeek) {
  return moment(date)
    .day(dayOfWeek + 7)
    .toDate();
}

/**
 * Get the previous occurrence of a specific day of the week.
 * @param {Date|string} date - The reference date.
 * @param {number} dayOfWeek - The day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns {Date} The previous occurrence of the specified day of the week.
 */
function getPreviousDayOfWeek(date, dayOfWeek) {
  return moment(date)
    .day(dayOfWeek - 7)
    .toDate();
}

/**
 * Check if two date ranges overlap.
 * @param {Date|string} start1 - The start date of the first range.
 * @param {Date|string} end1 - The end date of the first range.
 * @param {Date|string} start2 - The start date of the second range.
 * @param {Date|string} end2 - The end date of the second range.
 * @returns {boolean} True if the date ranges overlap, false otherwise.
 */
function doRangesOverlap(start1, end1, start2, end2) {
  return moment(start1).isBefore(end2) && moment(start2).isBefore(end1);
}

/**
 * Format a date as a relative time string (e.g., "2 days ago").
 * @param {Date|string} date - The date to format.
 * @returns {string} The formatted relative time string.
 */
function formatRelativeTime(date) {
  return moment(date).fromNow();
}

/**
 * Format a time with AM/PM notation.
 * @param {Date|string} time - The time to format.
 * @returns {string} The formatted time string with AM/PM.
 */
function formatTimeWithAMPM(time) {
  return moment(time).format("hh:mm A");
}

/**
 * Get the current month as a string.
 * @returns {string} The current month.
 */
function getCurrentMonth() {
  return moment().format("MMMM");
}

/**
 * Get the current year.
 * @returns {number} The current year.
 */
function getCurrentYear() {
  return moment().year();
}

/**
 * Get the current day of the month.
 * @returns {number} The current day of the month.
 */
function getCurrentDay() {
  return moment().date();
}

/**
 * Get the current time as a string in the format "HH:mm:ss".
 * @returns {string} The current time.
 */
function getCurrentTime() {
  return moment().format("HH:mm:ss");
}

/**
 * Get the current time in a specific time zone.
 * @param {string} timeZone - The time zone to use.
 * @returns {string} The current time in the specified time zone.
 */
function getCurrentTimeInTimeZone(timeZone) {
  return moment().tz(timeZone).format("HH:mm:ss");
}

/**
 * Convert time between two time zones.
 * @param {Date|string} time - The time to convert.
 * @param {string} fromTimeZone - The source time zone.
 * @param {string} toTimeZone - The target time zone.
 * @returns {string} The converted time.
 */
function convertTimeBetweenTimeZones(time, fromTimeZone, toTimeZone) {
  return moment.tz(time, fromTimeZone).tz(toTimeZone).format("HH:mm:ss");
}

/**
 * Get the time difference between two time zones in hours.
 * @param {string} fromTimeZone - The source time zone.
 * @param {string} toTimeZone - The target time zone.
 * @returns {number} The time difference in hours.
 */
function getTimeDifferenceBetweenTimeZones(fromTimeZone, toTimeZone) {
  const from = moment.tz(fromTimeZone);
  const to = moment.tz(toTimeZone);
  return to.utcOffset() / 60 - from.utcOffset() / 60;
}

/**
 * Add a specific amount of time to a date.
 * @param {Date|string} date - The original date.
 * @param {number} amount - The amount of time to add.
 * @param {string} unit - The unit of time to add (e.g., 'days', 'months').
 * @returns {Date} The new date with the added time.
 */
function addTime(date, amount, unit) {
  return moment(date).add(amount, unit).toDate();
}

/**
 * Subtract a specific amount of time from a date.
 * @param {Date|string} date - The original date.
 * @param {number} amount - The amount of time to subtract.
 * @param {string} unit - The unit of time to subtract (e.g., 'days', 'months').
 * @returns {Date} The new date with the subtracted time.
 */
function subtractTime(date, amount, unit) {
  return moment(date).subtract(amount, unit).toDate();
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
  isWeekday,
  getWeeksInYear,
  calculateAge,
  isToday,
  isPast,
  isFuture,
  getStartOfNextMonth,
  getEndOfPreviousMonth,
  getTotalDaysBetween,
  getTotalBusinessDaysBetween,
  getNextDayOfWeek,
  getPreviousDayOfWeek,
  doRangesOverlap,
  formatRelativeTime,
  formatTimeWithAMPM,
  getCurrentMonth,
  getCurrentYear,
  getCurrentDay,
  getCurrentTime,
  getCurrentTimeInTimeZone,
  convertTimeBetweenTimeZones,
  getTimeDifferenceBetweenTimeZones,
  addTime,
  subtractTime,
};
