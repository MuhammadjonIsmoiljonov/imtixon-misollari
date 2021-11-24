
var salaries = {
  "Akmal":1200,
  "Salim":5200,
  "Karim":1800
}

var summ = 0

function sumSalaries(salaries){
  var arr = Object.values(salaries)
  for(var value of arr){
    summ +=value
  }
  console.log(summ)
}

sumSalaries(salaries)