import React from 'react'
import ReactDOM from 'react-dom/client'
function Greating() {
  return (
    <>
      <section>
        <h2>My First Component</h2>
      </section>
      <input type="text" name="" id="" />
    </>
  )
}

// function Greating() {
//   return React.createElement('h2',{},'hello world !!')
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greating />)
