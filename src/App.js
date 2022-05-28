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
      duration: 1000
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex h-screen flex-col bg-[url('./assets/bg.png')]">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
