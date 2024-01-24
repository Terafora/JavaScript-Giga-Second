/*
    This function converts a date into milliseconds, adds a gigasecond (in miliiseconds) and returns
    a date one gigasecond later.

    During this exercise I learned how to turn dates into milliseconds (and that I could take
    dates as arguments to functions) and how to use the proper mathematical notation in JavaScript
    rather than writing many zeroes and possibly making a typo.
*/

let gigaSecond = 1e12;
export const gigasecond = (inputDate) => {
  return (new Date(inputDate.getTime() + gigaSecond));
};