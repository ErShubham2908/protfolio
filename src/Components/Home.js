import React from 'react'
import profileImg from '../Asset/SK_F_B-P.png'

function Home() {
  return (
    <>
        <div className='pHome'>
          {/* <div className='pImg' > */}
              <img className='imgP' src={profileImg} alt='Not found' />
          {/* </div> */}
        </div>
    </>
  )
}

export default Home
