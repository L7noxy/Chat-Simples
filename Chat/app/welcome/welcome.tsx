import './welcome.css';
import { Link } from 'react-router';

export function Welcome() {
  return (
    <div>
      <h1>
        Bem Vindo ao nosso chat
      </h1>
      <Link to={'Chat'}>oi</Link>
    </div>
  );
}

