import InputField from '../../components/InputField'

import './signup.css'

const login = () => {
  return (
    <div className="login-container">
      <div>
        <link rel="icon" type="image/svg+xml" href="/src/assets/images/Logo1.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <title>Lonely Watch - Sign Up</title>
      </div>
      
      <div className='back'><a href="./login"><i class="material-symbols-outlined">chevron_left</i>Back</a></div>

        <h2 className="form-title">Sign up</h2>
        
        <div action="#" className="login-form">
          <InputField type="email" placeholder="Email adress" icon="mail" />
          <InputField type="password" placeholder="Create Password" icon="lock" />


          <button className="login-button">Sign Up</button>
        </div>

    </div>
  )
}

export default login
