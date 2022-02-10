import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'

export default function HomePage() {
  return (
    <main>
      <Logo />
      <Link to="/transportation">Carbon Output from Transportation</Link>
    </main>
  )
}