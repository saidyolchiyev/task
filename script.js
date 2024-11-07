// Task 1
const input = prompt("Enter date: ")
const date1 = new Date(input)
const dateFormatter = new Intl.DateTimeFormat('az', {dateStyle: 'long'})
console.log(dateFormatter.format(date))

// Task 2
const num = prompt('Enter number of the month: ')
const date2 = new Date()
date.setMonth(num)
console.log(date.toLocaleString('az', { month: 'long' }))