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
