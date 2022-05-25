import { Outlet } from 'react-router-dom';

export function Main() {
  return (
    <div className="sm:max-w-screen-xs mx-auto w-full flex-1 overflow-y-auto p-4 py-20">
      <Outlet />
    </div>
  );
}

export default Main;
