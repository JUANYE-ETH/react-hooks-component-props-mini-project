import React from 'react'

function About({ image }) {
  console.log({image})

  return (
    <div>
      <aside>
      {image}
      <p>About</p>
      </aside>
    </div>
  )
}

export default About