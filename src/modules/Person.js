
class Person {
  constructor() {
    this.isLogin = false
    this.init()
  }

  init() {
    // console.log('init');
  } 

  login(userId) {
    if (userId) {
      this.isLogin = true
    }
  }
}

export default new Person()