import React, {useState} from 'react'

const Home=()=> {
  
      const [popup, setPopup] = useState(false);
  
  
  const togglePopup =()=>{
    setPopup(!popup)
  }

  if(popup){
    document.body.classList.add('active-popup')
  } else{
    document.body.classList.remove('active-popup')
  }

  return (
    <div id='main'>

      <div className='header-heading'>
      <h2>Connecting Freelancers and Employers</h2>
      <h2><span>By Zagol</span></h2>
      
      <div className='header-btns'>
        <button className='header-btn' onClick={togglePopup}>Register Now</button>

      {popup && (
        <div className="popup">
        <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content">
            <h3>Register</h3>
            <input type="radio" name="user" value="freelancer" /> Freelancer
            <input type="radio" name="user" value="employer" /> Employer <br />
            <input className="input" type="text" placeholder='Fullname' />
            <input className="input" type="text" placeholder='Phonenumber' />
            <input className="input" type="email" placeholder='Email' /> 
            <input className="input" type="password" placeholder='Password' /> <br />
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <br /> <br />
            <button className='popup-btn' >Submit</button>
            <p>Already have an account. LogIn</p>
            <button className='popup-btn' onClick={togglePopup}>Close</button>
          </div>
        
      </div>

      )}
    </div>
</div>
    </div>

  )
  
}

export default Home
