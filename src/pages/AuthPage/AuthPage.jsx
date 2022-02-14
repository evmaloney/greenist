import { useState } from 'react';
import './AuthPage.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <Logo className="mainLogo" />
      <p className="slogan">some are green. others are greener. you're the <span>Greenist</span></p>
      <div className="AuthPage">
        <div>
          <p>{showLogin ? 'Not yet' : 'Already'} a member?
            <span onClick={() => setShowLogin(!showLogin)}>{showLogin ? ' Sign Up' : ' Log In'}</span>
          </p>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  )
}