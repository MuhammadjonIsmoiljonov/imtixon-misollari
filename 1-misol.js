
function sumInput() {
  var arr = []
  var value = 1
  var summ = 0
  while (value > 0) {
    var number = prompt('Raqamni kiriting')
    if (!isNaN(Number(number)) && number != '' && number != null) {
      arr.push(Number(number))
    } else {
      for (item of arr) {

        summ = summ + item
        value = 0
      }
      console.log(summ)
    }
  }
}

sumInput()

