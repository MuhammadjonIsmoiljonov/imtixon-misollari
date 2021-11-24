
// Array yasash
var arr = ['Jazz', 'Blues']
console.log(arr)

// Rock-n-roll ni oxriga qo`shish
arr.push('Rock-n-roll')
console.log(arr)

// Arrayni markaziy qiymatini  "Classic" ga almashtirish
var centerIndex = Math.floor(arr.length/2)
arr[centerIndex] = 'Classic'
console.log(arr)

// Arrayni birinchi qiymatini olib tashlash
arr.shift()
console.log(arr)

// "Rap" va "Reggae" qiymatlarini array boshiga qo`shish
arr.unshift('Rap', 'Reggae')
console.log(arr)