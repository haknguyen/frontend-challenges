import { Outlet } from 'react-router-dom';

import './layout.css';

export function Layout() {
  return (
    <div className='layout'>
      <main className='layout__main'>
        <Outlet />
      </main>
    </div>
  );
}
