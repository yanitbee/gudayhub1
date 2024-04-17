import React, {useState} from 'react'

const Home=()=> {
  
      const [popup, setPopup] = useState(false);
  
  
  const togglePopup =()=>{
    setPopup(!popup)
  }
  return (
    <div id='main'>

      <div className='header-heading'>
      <h2>Connecting Freelancers and Employers</h2>
      <h2><span>By Zagol</span></h2>
      
      <div className='header-btns'>
        <button className='header-btn' onClick={togglePopup}>Register Now</button>

        <div className="popup">
          <div className="overlay">
            <div className="popup-content">
              <h2>Register</h2>
              <p>qwertyulkjhc jkhgasdyu</p>
              <button className='header-btn' onClick={togglePopup}>close</button>
            </div>
          </div>
        </div>
      </div>
  </div>
    </div>

  )
  
}

export default Home
