# moment-date-utils

A package to format dates and times using moment.js.

## Installation

You can install the package using npm:

```sh
npm install moment-date-utils


## Demo

const date = new Date();

console.log(formatDate(date)); // Outputs: 2024-06-16
console.log(formatTime(date)); // Outputs: 14:35:10
console.log(formatDateTime(date)); // Outputs: 2024-06-16 14:35:10
console.log(formatCustom(date, 'dddd, MMMM Do YYYY, h:mm:ss a')); // Outputs: Sunday, June 16th 2024, 2:35:10 pm
console.log(getLast7Days()); // Outputs current and 7 days ago dates
console.log(getLast30Days()); // Outputs current and 30 days ago dates
console.log(getLast3Months()); // Outputs current and 3 months ago dates
console.log(getLast7Months()); // Outputs current and 7 months ago dates
console.log(formatTimeWithAMPM(date)); // Outputs time with AM/PM format
console.log(getDaysCount(startDate, endDate)); // Outputs: 15 (example)
console.log(getCurrentMonth()); // Outputs: Current month number (example: 6 for June)
console.log(getCurrentYear()); // Outputs: Current year (example: 2024)
console.log(getCurrentDay()); // Outputs: Current day of the month (example: 16)
console.log(getCurrentTime()); // Outputs: Current time in 'HH:mm:ss' format (example: 14:35:10
```

## Functions

1. formatDate,
2. formatTime,
3. formatDateTime,
4. formatCustom,
5. getLast7Days,
6. getLast30Days,
7. getLast3Months,
8. getLast7Months,
9. formatTimeWithAMPM
10. getDaysCount
11. getCurrentMonth
12. getCurrentYear
13. getCurrentDay
14. getCurrentTime
