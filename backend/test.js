const fs = require('fs');

var data = fs.readFileSync('locationData.json');
var data = JSON.parse(data);
console.log(data);

console.log(data.locData.filter(locations => {
    return locations.user === 'dula';
})[0]);

// var locationData = [
// 	{
// 		id: 1,
// 		user: 'dula',
// 		cities: ['Calgary, Dubai']
// 	},
// 	{
// 		id: 2,
// 		user: 'saeed',
// 		cities: ['Toronto', 'Abu Dhabi']
// 	},
// ]

// console.log(locationData.filter(locations => {
//     return locations.user === 'dula';
// })[0]);

// console.log(typeof locationData);