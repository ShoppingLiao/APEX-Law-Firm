import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 justify-between bg-blue-darker px-4">
      <div className="flex items-center border-b py-2 text-white">
        <Link to="/" className="flex-1 border-r text-center">
          關於鼎道
        </Link>
        <Link to="/contact" className="flex-1 border-r text-center">
          聯絡方式
        </Link>
        <div className="flex-1 border-r text-center">
          <a
            href="https://www.facebook.com/%E9%BC%8E%E9%81%93%E5%9C%8B%E9%9A%9B%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80-109636181734540"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook
          </a>
        </div>
        <div className="flex-1 text-center">Line</div>
      </div>
      <div className="py-2 text-center text-xs text-white">
        Copyright © 2022 鼎道國際法律事務所 All rights reserved.
      </div>
    </footer>
  );
}

// https://www.facebook.com/%E9%BC%8E%E9%81%93%E5%9C%8B%E9%9A%9B%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80-109636181734540

export default Footer;
