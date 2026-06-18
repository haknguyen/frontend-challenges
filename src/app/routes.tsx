import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/app/Layout';
import { ChallengePage } from '@/pages/ChallengePage';
import { Home } from '@/pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='challenges/:slug' element={<ChallengePage />} />
      </Route>
    </Routes>
  );
}
