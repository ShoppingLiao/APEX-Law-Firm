import { Outlet } from 'react-router-dom';

export function Main() {
  test();
  function test() {
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
      className="sm:max-w-3xl mx-auto w-full flex-1 overflow-y-auto p-4 py-20"
      onScroll={test}
    >
      <Outlet />
    </div>
  );
}

export default Main;
