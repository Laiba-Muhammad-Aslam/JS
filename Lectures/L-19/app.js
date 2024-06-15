console.log(moment());

console.log(moment().format());

console.log(moment().format("YYYY"));

console.log(moment().format("DD MM YYYY"));

console.log(moment().format("DD MMMM YYYY"));

console.log(moment(new Date("17 October 2003")).fromNow());

console.log(moment(new Date("17 June 2024")).fromNow());

console.log(moment().startOf('day').fromNow());

var a = moment([2024, 7, 15]);
var b = moment([2007, 0, 29]);

console.log(a.diff(b, 'days'))
console.log(a.diff(b, 'years'))
console.log(a.diff(b, 'months'))

console.log(moment().format('LT'));