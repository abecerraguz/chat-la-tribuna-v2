import './style.scss'
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg'
import { setupCounter } from './components/counter.js'

document.querySelector('#app').innerHTML = `

`

setupCounter(document.querySelector('#counter'))
