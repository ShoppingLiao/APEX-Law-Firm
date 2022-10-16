import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router } from './Router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="centered_layout">
      <div className="flex h-full w-full flex-col bg-[url('./assets/bg.png')]">
        <Header />
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
