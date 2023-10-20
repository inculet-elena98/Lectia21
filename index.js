// const obj = {
//   name: 'Alex'
// }
// Object.defineProperties(obj, {
//   city: {
//     value: 'Chisinau',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   },
//   job: {
//     value: 'developer',
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   hobby: {
//     value: 'cycling',
//     writable: true,
//     enumerable: true,
//     configurable: false
//   }
// })
// // obj.city = 'New York'
// // Object.defineProperty(obj, 'hobby', {
// //   writable: false
// // })
// // obj.hobby = 'swiming'
// Object.defineProperty(obj, 'hobby', {
//   enumerable: false
// })
// console.log(Object.values(obj))
// // console.log(obj)



// const obj = {
//   name: 'Alex'
// }
// // Object.preventExtensions(obj)
// // obj.x = 'y'
// Object.freeze(obj)
// // Object.seal(obj)
// obj.x = 'y'
// obj.name = 'victor'
// Object.defineProperty(obj, 'name'{
//   configurable: true
// })
// console.log(Object.values(obj))



// const arr = [4, 3, 4, 6, 8, 91, 7]
// console.log(arr.sort((a, b) => a - b))



// const arr = ['Boris', 'Alex', 'Vasile']
// console.log(arr.sort((a, b) => a > b ? -1 : 1))
// console.log(arr.sort((a, b) => a > b ? 1 : -1))


// const arr = [
//   {
//     nume: 'Alex',
//     age: 33
//   },
//   {
//     nume: 'vasile',
//     age: 25
//   },
//   {
//     nume: 'Boris',
//     age: 55
//   }
// ]
// const sortFunc = (arr, key, order) => {
//   switch (order) {
//     case 'ASC':
//       return arr.sort((a, b) => a[key] < b[key] ? 1 : -1)
//     case 'DSC':
//       return arr.sort((a, b) => a[key] < b[key] ? -1 : 1)
//     default:
//       return arr
//   }
// }
// 1 arr
// 2 filtrarea dupa cheie
// 3
// console.log(sortFunc(arr, 'nume', 'ASC'))


// const obj =
// {
//   nume: 'Alex',
//   age: 33
// }
// for (let key in obj) {
//   console.log(obj[key])
// }



// const obj = [
//   {
//     nume: 'Alex',
//     age: 33
//   },
//   {
//     nume: 'Vasile',
//     age: 25
//   },
//   {
//     nume: 'Boris',
//     age: 55
//   }
// ]
// for (let value of arr) {
//   console.log(value)
// }



// const arr = [1, 2, 3, 4, 5, 6]
// const element = arr.pop()
// console.log('arr', arr)
// console.log('element', element)


// const arr = [1, 2, 3, 4, 5, 6]
// const element = arr.shift()
// console.log('arr', arr)
// console.log('element', element)


// const arr = [1, 2, 3, 4, 5, 6]
// const element = arr.push(7, 8)
// console.log('arr', arr)
// console.log('element', element)


// const arr = [1, 2, 3, 4, 5, 6]
// const element = arr.unshift(-2, -1, 0)
// console.log('arr', arr)
// console.log('element', element)


// const arr = [1, 2, 3, 4, 5, 6]
// const element = arr.join('+')
// console.log('arr', arr)
// console.log('element', element)


// const arr = [1, 2, 3, 4, 5, 6]
// const str = 'string string'
// const element = str.split(' ')
// console.log('arr', arr)
// console.log('element', element)




// const arr = [1, 2, 3, 4, 5, 6]
// const element = arr.reverse()
// console.log('arr', arr)
// console.log('element', element)


// const arr = [1, 2, 3, 4, 5, 6]
// const mapedArr1 = arr.map((item) => item + 1)
// const mapedArr2 = arr.reduce((acc, curr) => {
//   acc.push(curr + 1)
//   return acc;
// }, [-1, 0])
// // const element = arr.reduce((accumulator, currentValue, index) => {
// //   accumulator = accumulator + currentValue
// //   return accumulator
// // }, 0)
// console.log('mapedArr1', mapedArr1)
// console.log('mapedArr2', mapedArr2)



// const arr = [1, 2, 3, 4, 5, 6]
// const mapedArr1 = arr.filter((item) => item % 2 === 0)
// const mapedArr2 = arr.reduce((acc, curr) => {
//   if (curr % 2 === 0) acc.push(curr)
//   return acc;
// }, [])
// // const element = arr.reduce((accumulator, currentValue, index) => {
// //   accumulator = accumulator + currentValue
// //   return accumulator
// // }, 0)
// console.log('mapedArr1', mapedArr1)
// console.log('mapedArr2', mapedArr2)



// const arr = [1, 2, 3, 4, 5, 6]
// // const element = arr.reduce((accumulator, currentValue, index) => {
// //   accumulator = accumulator + currentValue
// //   return accumulator
// // }, 0)
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
//   if (i === arr.length - 1) console.log(sum)
// }
// // console.log('arr', arr)
// // console.log('element', element)



// const arr = [1, 2, 3, 4, 5, 6]
// n = 6
// const func = (n) => {
//   const result = []
//   for (let i = 0; i <= n; i++) result.push(i)
//   return result
// }
// console.log(func(10))



// const arr = [1, 2, 3, 4, 5, 6, 44, 12, 555, 777]
// n = 6
// const highestElement = arr.reduce((acc, cur) => {
//   return acc > cur ? acc : cur;
// })

// // const func = (arr) => {
// //   const result = 0
// //   for (let i = 0; i <= arr.lenght; i++) if (arr[i] > result) result = arr[i]
// //   return result
// // }
// console.log(highestElement)
// // console.log(func(10))



// const arr = [1, 2, 3, 4, 5, 6, 44, 12, 555, 777]
// const char1 = 'o'
// const str1 = 'Hello world'
// // const func = (char, str) => {
// //   // let result = 0
// //   // for (let i = 0; i <= str.length; i++) if (str[i] === char) result++
// //   // return result
// //   return str.split('').reduce((acc, cur) => {
// //     return cur === char ? ++acc : acc
// //   }, 0)
// // }
// console.log(str1.split(''))
// console.log(char1, str1)



// const note = {
//   nota1: 10,
//   nota2: 8,
//   nota3: 9
// }
// 'media:9'
// const func = (obj) => {
//   const note = Object.values(obj)
//   const sum = note.reduce((acc, curr) => acc + curr)
//   return `media:${sum / note.length}`
// }
// console.log(func(note))



const note = [
  {
    nume: 'Alex',
    city: 'Chisinau',
    hobby: 'cycling'
  },
  {
    nume: 'Alex',
    city: 'Chisinau',
    hobby: 'cycling'
  }
]
const func = (arr) => {
  console.log('=========')
  return arr.forEach((item) => {
    const keys = Object.keys(item)
    for (let key of keys) {
      console.log(`${key}: ${item[key]}`)
    }
    console.log('=========')
  })
}

console.log(func(note))