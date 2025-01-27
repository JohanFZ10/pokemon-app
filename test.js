function sortElements(array, asc) {
  return asc ? (array.sort((a,b)=> a.height - b.height)):(array.sort((a,b)=> b.height - a.height))
}
  
const array = [
  { height: 5},
  { height: 10},
  { height: 1},
  { height: 4},
  { height: 5},
  { height: 7},
  { height: 25},
  { height: 30},
  { height: 45},
  { height: 7},
];
console.log(sortElements(array, true));