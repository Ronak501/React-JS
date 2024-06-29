import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
    <a href='https://google.com' target='_blank'>visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {
        href:"https://google.com",
        target:"_blank"
    },
    "open Google"
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <App/>
)
