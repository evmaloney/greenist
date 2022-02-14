import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import './HomePage.css'

export default function HomePage() {
  return (
    <main>
      <Logo />
      <p>Choose an option to calculate your carbon footprint</p>
      <div class="blueButtonDiv">
        <Link to="/transportation" className="blueButton">Transportation</Link>
        <Link to="/" className="blueButton">Electricity</Link>
        <Link to="/" className="blueButton">Water</Link>
      </div>
    </main>
  )
}