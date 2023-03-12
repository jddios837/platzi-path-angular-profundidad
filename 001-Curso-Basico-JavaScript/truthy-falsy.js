Boolean(0); // false
Boolean(null); // false
Boolean(NaN); // false
Boolean(undefined); // false
Boolean(""); // false

Boolean(" ") // true
Boolean(1); // true
Boolean(2); // true
Boolean([]); // true
Boolean({}); // true
Boolean(function() {}); // true
