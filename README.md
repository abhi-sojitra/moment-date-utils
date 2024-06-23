# moment-date-utils

A package to format dates and times using moment.js.

## Medium Blog Link

[MEDIUM](https://medium.com/@abhisheksojitra19/mastering-date-and-time-in-javascript-with-moment-date-utils-dbc7eae966fe)

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
console.log(getCurrentTime()); // Outputs: Current time in 'HH:mm:ss' format (example: 14:35:10)
console.log(getRelativeTime(pastDate)); // Outputs: '16 days ago' (example)
console.log(getCurrentTimeInTimeZone('America/New_York'));
console.log(convertTimeBetweenTimeZones('2024-06-17 12:00', 'America/New_York', 'Asia/Tokyo'));
console.log(getTimeDifferenceBetweenTimeZones('America/New_York', 'Asia/Tokyo'));
console.log(formatTimeInTimeZone('2024-06-17 12:00', 'America/New_York', 'MMMM Do YYYY, h:mm:ss a'));
console.log(getAllTimeZones());
console.log(addTime(new Date(), 5, 'days')); // Adds 5 days to the current date
console.log(subtractTime(new Date(), 5, 'days')); // Subtracts 5 days from the current date
console.log(getStartOf(new Date(), 'month')); // Start of the current month
console.log(getEndOf(new Date(), 'month')); // End of the current month
console.log(getDaysInMonth(new Date())); // Number of days in the current month
console.log(isWeekend(new Date())); // Checks if today is a weekend
console.log(getWeekNumber(new Date())); // Gets the week number of the current date
console.log(parseAndFormatISODate('2024-06-17T12:00:00Z', 'YYYY-MM-DD HH:mm:ss')); // Parses and formats an ISO 8601 date
console.log(isLeapYear(new Date())); // Outputs: true or false
console.log(getQuarter(new Date())); // Outputs: the current quarter (1-4)
console.log(getISOWeek(new Date())); // Outputs: the current ISO week number
console.log(addWeeks(new Date(), 3)); // Outputs: date 3 weeks from now
console.log(subtractWeeks(new Date(), 3)); // Outputs: date 3 weeks ago
console.log(getBusinessDays('2024-06-01', '2024-06-15')); // Outputs: number of business days between June 1 and June 15, 2024
console.log(getDaysUntilDate('2024-12-31')); // Outputs: number of days until December 31, 2024
console.log(isDaylightSavingTime(new Date())); // Outputs: true if current date is in DST, false otherwise
console.log(getFirstDayOfMonth(2024, 6)); // Outputs: first day of June 2024
console.log(getLastDayOfMonth(2024, 6)); // Outputs: last day of June 2024
console.log(getFirstDayOfQuarter(2024, 2)); // Outputs: first day of the 2nd quarter of 2024
console.log(getLastDayOfQuarter(2024, 2)); // Outputs: last day of the 2nd quarter of 2024
console.log(getFirstDayOfYear(2024)); // Outputs: first day of 2024
console.log(getLastDayOfYear(2024)); // Outputs: last day of 2024
console.log(getWeekdays('2024-06-01', '2024-06-15')); // Outputs: array of weekdays between June 1 and June 15, 2024
console.log(getMonthName('2024-06-15')); // Outputs: June
console.log(getDayName('2024-06-15')); // Outputs: Saturday
console.log(formatToRFC2822('2024-06-15T12:00:00Z')); // Outputs: formatted RFC 2822 string of the date
console.log(formatToUnix('2024-06-15T12:00:00Z')); // Outputs: Unix timestamp of the date
console.log(getTimeDifferenceInUnits('2024-06-01', '2024-06-15', 'days')); // Outputs: 14 (difference in days)
console.log(getDaysFromNow(10)); // Outputs: date 10 days from now
console.log(getWeeksFromNow(5)); // Outputs: date 5 weeks from now
console.log(getMonthsFromNow(2)); // Outputs: date 2 months from now
console.log(getYearsFromNow(1)); // Outputs: date 1 year from now
console.log(isBetween('2024-06-10', '2024-06-01', '2024-06-15')); // Outputs: true
console.log(isSameOrBefore('2024-06-01', '2024-06-15')); // Outputs: true
console.log(isSameOrAfter('2024-06-15', '2024-06-01')); // Outputs: true
console.log(isHoliday('2024-12-25', ['2024-12-25', '2024-01-01'])); // Outputs: true
console.log(isWeekday('2024-06-20')); // Outputs: true (Thursday)
console.log(getWeeksInYear(2024)); // Outputs: 52 (or 53 depending on the year)
console.log(calculateAge('1990-06-15')); // Outputs: 34 (if the current year is 2024)
console.log(isToday(new Date())); // Outputs: true (if the date is today)
console.log(isPast('2023-06-20')); // Outputs: true (if the current date is past June 20, 2023)
console.log(isFuture('2025-06-20')); // Outputs: true (if the current date is before June 20, 2025)
console.log(getStartOfNextMonth()); // Outputs: Sat Jul 01 2024 00:00:00 GMT+0000 (or similar)
console.log(getEndOfPreviousMonth()); // Outputs: Fri May 31 2024 23:59:59 GMT+0000 (or similar)
console.log(getTotalDaysBetween('2024-01-01', '2024-12-31')); // Outputs: 365 (for a non-leap year)
console.log(getTotalBusinessDaysBetween('2024-01-01', '2024-01-10')); // Outputs: 7 (assuming no holidays)
console.log(getNextDayOfWeek('2024-06-20', 1)); // Outputs: Mon Jun 24 2024 00:00:00 GMT+0000 (or similar, next Monday)
console.log(getPreviousDayOfWeek('2024-06-20', 1)); // Outputs: Mon Jun 17 2024 00:00:00 GMT+0000 (or similar, previous Monday)
console.log(doRangesOverlap('2024-01-01', '2024-01-10', '2024-01-05', '2024-01-15')); // Outputs: true
console.log(formatRelativeTime('2024-06-20')); // Outputs: "in a year" (if today is 2023-06-20)
console.log(formatTimeWithAMPM('2024-06-20T14:30:00')); // Outputs: "02:30 PM"
console.log(getCurrentMonth()); // Outputs: "June" (if today is June)
console.log(getCurrentYear()); // Outputs: 2024 (if today is 2024)
console.log(getCurrentDay()); // Outputs: 20 (if today is the 20th of the month)
console.log(getCurrentTime()); // Outputs: "14:30:00" (if the current time is 2:30 PM)
console.log(getCurrentTimeInTimeZone('America/New_York')); // Outputs: "10:30:00" (if the current time in New York is 10:30 AM)
console.log(convertTimeBetweenTimeZones('2024-06-20T14:30:00', 'America/Los_Angeles', 'Asia/Tokyo')); // Outputs: "06:30:00" (next day)
console.log(getTimeDifferenceBetweenTimeZones('America/Los_Angeles', 'Asia/Tokyo')); // Outputs: 16 (hours difference)
console.log(addTime('2024-06-20', 5, 'days')); // Outputs: "2024-06-25"
console.log(subtractTime('2024-06-20', 1, 'month')); // Outputs: "2024-05-20"

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
15. getRelativeTime
16. getCurrentTimeInTimeZone
17. convertTimeBetweenTimeZones
18. getTimeDifferenceBetweenTimeZones
19. formatTimeInTimeZone
20. getAllTimeZones
21. addTime
22. subtractTime
23. getStartOf
24. getEndOf
25. getDaysInMonth
26. isWeekend
27. getWeekNumber
28. parseAndFormatISODate
29. isLeapYear
30. getQuarter
31. getISOWeek
32. addWeeks,
33. subtractWeeks,
34. getBusinessDays,
35. getDaysUntilDate,
36. isDaylightSavingTime,
37. getFirstDayOfMonth,
38. getLastDayOfMonth,
39. getFirstDayOfQuarter,
40. getLastDayOfQuarter,
41. getFirstDayOfYear,
42. getLastDayOfYear,
43. getWeekdays,
44. getMonthName,
45. getDayName,
46. formatToRFC2822,
47. formatToUnix,
48. getTimeDifferenceInUnits,
49. getDaysFromNow,
50. getWeeksFromNow,
51. getMonthsFromNow,
52. getYearsFromNow,
53. isBetween,
54. isSameOrBefore,
55. isSameOrAfter,
56. isHoliday,
57. isWeekday
58. getWeeksInYear
59. calculateAge
60. isToday
61. isPast
62. isFuture
63. getStartOfNextMonth
64. getEndOfPreviousMonth
65. getTotalDaysBetween
66. getTotalBusinessDaysBetween
67. getNextDayOfWeek
68. getPreviousDayOfWeek
69. doRangesOverlap
70. formatRelativeTime
