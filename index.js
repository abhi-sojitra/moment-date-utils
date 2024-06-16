const moment = require("moment");

function formatDate(date) {
  return moment(date).format("YYYY-MM-DD");
}

function formatTime(date) {
  return moment(date).format("HH:mm:ss");
}

function formatDateTime(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

function formatCustom(date, formatString) {
  return moment(date).format(formatString);
}

module.exports = {
  formatDate,
  formatTime,
  formatDateTime,
  formatCustom,
};
