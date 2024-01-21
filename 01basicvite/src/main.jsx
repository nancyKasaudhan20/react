import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

//creating my function
function MyApp(){
  return(
    <>
    <h1>Custom react app</h1>
    </>
  )
}
//creating my element
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit GOOGLE</a>
)

const SecondElement = {
  type: 'a', //any name instead of word type
  props: {
    href: "https://gooogle.com",
    target: '_blank'
  } ,
  children: 'Click me to visit google'
}
//second element will not be shown in browser by typing here simply insdide reactdom as SecondElement bcz react doesn't understand all these, convert it into react language (object). HOW?? by React.createElement()
const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:"_blank"},
  'Click to visit google'
  //object form

)

ReactDOM.createRoot(document.getElementById('root')).render(
 <App/>
  // AnotherElement
 
)
