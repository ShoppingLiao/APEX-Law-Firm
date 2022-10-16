import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export function Main() {
  const { pathname } = useLocation();

  useEffect(() => {
    const ref = document.getElementById('main');
    ref.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  function initAosScroll() {
    const items = document.querySelectorAll('.aos-init');

    if (items) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('aos-animate', entry.isIntersecting);
        });
      }, {
        threshold: 0,
      });
      items.forEach((item) => {
        observer.observe(item);
      });
    }
  }
  return (
    <div
      id='main'
      className="sm:max-w-3xl mx-auto w-full flex-1 overflow-y-auto overflow-x-hidden p-4  bg-[url('./assets/bg.png')]"
      onScroll={initAosScroll}
    >
      <Outlet />
    </div>
  );
}

export default Main;
