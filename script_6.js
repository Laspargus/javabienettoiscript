const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
entrepreneurs.forEach(entrepreneur=>{
      if(entrepreneur['year']>1970 && entrepreneur['year']<1980){
      console.log(entrepreneur)
    }

});


console.log("Sors un array qui contient le prénom et le nom des entrepreneurs")
FirstAndLastName=[]
entrepreneurs.forEach(entrepreneur=>{
      FirstAndLastName.push(entrepreneur['first']);
      FirstAndLastName.push(entrepreneur['last']);
});
console.log(FirstAndLastName)

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach(entrepreneur=>{
    entrepreneur.age=2018-entrepreneur.year;
    console.log(entrepreneur)
});


console.log("Trie les inventeurs par ordre alphabétique du nom de famille")
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

console.log(entrepreneurs.sort(dynamicSort("first")));