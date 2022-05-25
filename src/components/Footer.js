import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 justify-between bg-blue-darker px-4">
      <div className="flex items-center border-b py-2 text-white">
        <Link to="/" className="flex-1 border-r text-center">關於鼎道</Link>
        <Link to="/contact" className="flex-1 border-r text-center">聯絡方式</Link>
        <div className="flex-1 border-r text-center">Facebook</div>
        <div className="flex-1 text-center">Line</div>
      </div>
      <div className="py-2 text-center text-xs text-white">
        Copyright © 2022 鼎道國際法律事務所 All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
;
