// 1. basic of arrow function
// const square = function(x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

//const square = (x) => x * x // return keyword도 필요 없음, 바로 return일때만 {} 생략 가능

// console.log(square(2))


// 2. arrow functions as properties on an object
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  /*
  pringGuestList: function() {
    console.log('Guest list for ' + this.name)
  } // 'this' is a reference to our object right here which means we can access properties
  근데 arrow function으로 바꾸면 this를 인식못함
  because arrow functions they don't bind their own 'this' value which means that we don't have access to 'this' as a reference to this object because of the fact we're using an arrow function
  */
  // 이런 문법으로 써도됨
  pringGuestList() {
    // const that = this // 이것도 하나의 방법....ㅋㅋ
    console.log('Guest list for ' + this.name)
    /*
    this.guestList.forEach(function(guest) {
      console.log(guest + ' is attending ' + that.name)
    }) // 얘도 own this binding을 가져서 this.name이 동작을 안함, parent function의 binding에 접근하고 싶은데!!
    
    해결방법 : arrow function으로 바꾸기! 왜냐면 arrow functions은 don't bind their own this value!!!
    They access the this value in the context in which they're created which in this case is right inside of printGuestList. That means we have access to this dot name pointing to the property up above.
    */
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.pringGuestList()