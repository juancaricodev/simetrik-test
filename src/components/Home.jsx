import React, { useRef } from 'react'

import '@styles/Home.scss'

const Home = () => {
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const searchField = new FormData(searchRef.current)
    const data = searchField.get('search')

    console.log(data)
  }

  return (
    <div className='home'>
      <h1>Search</h1>

      <form className='home__searchbar' ref={searchRef} onSubmit={handleSubmit}>
        <input type='text' name='search' />
        <button type='submit'>Search</button>
      </form>

      {/* <div className='result'>
        {data?.field}
      </div> */}
    </div>
  )
}

export default Home
