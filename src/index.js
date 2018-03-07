import _ from 'lodash'
import printMe from './print.js'
import React from 'react'
import _ from 'underscore'
import { cube } from './math.js'
import './common.css'

function component() {
  var element = document.createElement('pre')
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  )

  return element
}

console.log('dddd')
console.log('dddd')
console.log('dddd')

setTimeout(() => {
  console.log('dsadsa')
})

setTimeout(() => {
  const a = () => import('./test1.1.js')
  const b = () => import('./test1.2.js')
  const c = () => import('./test1.3.js')
  const d = () => import('./test1.4.js')
}, 10000)

document.body.appendChild(component())
