import { Outlet, Link } from 'react-router-dom';

import './layout.css';

export function Layout() {
  return (
    <div className='layout'>
      <header className='layout__header'>
        <Link to='/' className='layout__brand'>
          Frontend Challenges
        </Link>
      </header>
      <main className='layout__main'>
        <Outlet />
      </main>
    </div>
  );
}
