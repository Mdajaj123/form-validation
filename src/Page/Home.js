import React from 'react'

const Home = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
  return (
      <div className='d-flex justify-content-center align-items-center '>
          <div className='mh-100 mw-100 shadow p-4 h-100'>
              <p>Welcome to :{userData.email}</p>
          </div>
    </div>
  )
}

export default Home
