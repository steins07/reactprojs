import { createRoot } from 'react-dom/client'
// import React from 'react'
import App from './App.jsx'


export default function MyApp() {
  return (
    <div>
      <h1>custom app!</h1>
    </div>
  )
}

// const anotherUser= 'Steins'

// const anotherElement =
//   (
//     <a href="https://www.google.com" target="_blank">Visit Google </a>
//   )

// const reactElement = React.createElement(
//   'a'
//   , {
//     href: 'https://www.google.com'
//     , target: '_blank'
//   }
//   , 'Visit to Google', anotherUser
// )
createRoot(document.getElementById('root')).render(
  <>
  <App />
 
  </>
  // anotherElement
  // reactElement

)



