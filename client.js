'use strict'

$(document).ready( () => {
  console.log('Client side be like:')
  wow()
})

const wow = () => {
  return console.log('wow')
}

$('#welcome').on('click', function (e) {
  console.log(this)
  console.log(e.toElement.textContent)
})

class Demo {
  constructor(param1, param2) {
    this.p1 = param1 || "bananas"
    this.p2 = param2 || "bananas2"
  }
// get is like an attr_reader, you can call it without parenthesis
  get outputParams() { 
    console.log(`${this.p1} "AND" ${this.p2}`)
  }

  outputStuff() {
    this.outputParams
  }
}

const d = new Demo
d.outputParams
d.outputStuff()

