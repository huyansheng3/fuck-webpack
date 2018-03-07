import _ from 'lodash'
import printMe from './print.js'
import React from 'react'
import { cube } from './math.js'
import './members'
import './common.css'
function component() {
  var element = document.createElement('pre')
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  )

  return element
}

document.body.appendChild(component())
console.log('dddd')

console.log('dfasfsdfsd')

function test() {}
