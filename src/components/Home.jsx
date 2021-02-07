import React, { useRef } from 'react'

import '@styles/Home.scss'

const Home = () => {
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current)
  }

  return (
    <div className='home'>
      <h1>Search</h1>

      <form className='home__searchbar' ref={searchRef}>
        <input type='text' name='search' />
        <button type='submit' onSubmit={handleSubmit}>Search</button>
      </form>

      {/* <div className='result'></div> */}
    </div>
  )
}

export default Home
