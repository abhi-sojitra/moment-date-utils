# moment-date-utils

A package to format dates and times using moment.js.

## Installation

You can install the package using npm:

```sh
npm install moment-date-utils
```

Example

Here is a full example of how you might use the package:

const { formatDate, formatTime, formatDateTime, formatCustom } = require('moment-date-utils');

const date = new Date();

console.log(formatDate(date)); // Outputs: 2024-06-16
console.log(formatTime(date)); // Outputs: 14:35:10
console.log(formatDateTime(date)); // Outputs: 2024-06-16 14:35:10
console.log(formatCustom(date, 'dddd, MMMM Do YYYY, h:mm:ss a')); // Outputs: Sunday, June 16th 2024, 2:35:10 pm
