import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
