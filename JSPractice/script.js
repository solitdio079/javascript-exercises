class User {
  constructor(name){
    this.name = name
  }

  sayHi(){
    console.log(this.name)
  }
}

const user = new User("Jericko")
user.sayHi()
console.log(typeof User)

