import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from './components/List';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col bg-[url('./assets/bg.png')]">
      <header className="flex items-center justify-between bg-blue p-1 fixed top-0 left-0 right-0 z-10">
        <div className="h-14 w-24 bg-[url('./assets/logo.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="text-2xl text-white">鼎道國際法律事務所</div>
        <div className="flex h-12 w-10 items-center justify-center rounded text-white">
          <FontAwesomeIcon icon="fa-solid fa-bars" className="h-6 w-6" />
        </div>
      </header>
      <body className="flex-1 overflow-y-auto p-4 py-20">
        <div className="mx-auto mb-4 w-32 border-b text-center text-xl" data-aos="fade-up">
          公司簡介
        </div>
        <List />
      </body>
      <footer className="justify-between bg-blue px-4 fixed bottom-0 left-0 right-0">
        <div className="flex items-center border-b py-2 text-white">
          <div className="flex-1 border-r text-center">關於鼎道</div>
          <div className="flex-1 border-r text-center">聯絡方式</div>
          <div className="flex-1 border-r text-center">Facebook</div>
          <div className="flex-1 text-center">Line</div>
        </div>
        <div className="py-2 text-center text-xs text-white">
          Copyright © 2022 鼎道國際法律事務所 All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
