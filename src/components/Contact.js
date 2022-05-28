import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
const SLIDER_SETTING = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center">
      <div className="mx-auto mb-4 w-32 border-b text-center text-xl" data-aos="zoom-in">
        聯絡方式
      </div>
      <div data-aos="fade-right" className="my-4 w-full border-b pb-4">
        <div
          className="my-2 text-center text-xl font-bold"
          data-aos="fade-right"
          data-aos-delay={200}
        >
          台中事務所
        </div>
        <div className="my-1" data-aos="fade-right" data-aos-delay={400}>
          <FontAwesomeIcon icon="fa-solid fa-phone" className="mr-2" />
          04-23101213
        </div>
        <div className="my-1" data-aos="fade-right" data-aos-delay={600}>
          <FontAwesomeIcon icon="fa-solid fa-fax" className="mr-2" />
          04-23101032
        </div>
        <div className="my-1" data-aos="fade-right" data-aos-delay={800}>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" className="mr-2" />
          台中市西區東興路三段126之3號3樓
        </div>
        <div
          className="h_iframe max-h-xl mx-auto mt-4 h-80 w-full max-w-xl"
          data-aos="fade-right"
          data-aos-delay={1000}
        >
          <iframe
            title="taichung-office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7281.009873942668!2d120.64505942506743!3d24.154018187567544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dede029d9f5%3A0x29df84bed8cf6a82!2z8J-nkeKAjeKalum8jumBk-Wci-mam-azleW-i-S6i-WLmeaJgOKalu-4j--8jeatkOmZveW-teW-i-W4q--9nOael-agueWEhOW-i-W4q--9nOazleW-i-irruipouOAgeWIkeS6i-awkeS6i-ihjOaUv-ahiOS7tuOAgeazleW-i-mhp-WVj-OAgeS8gealreWutuW6reazleW-i-imj-WKgw!5e0!3m2!1szh-TW!2stw!4v1653733493792!5m2!1szh-TW!2stw"
            width="full"
            height="full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="my-4 mx-8" data-aos="fade-right" data-aos-delay={1200}>
          <Slider {...SLIDER_SETTING}>
            <div className="h-full w-full">
              <div className="max-h-xl mx-auto mt-4 h-80 w-full max-w-xl">
                <div className="h-full w-full bg-[url('./assets/contact-1.png')] bg-contain bg-center bg-no-repeat"></div>
              </div>
            </div>
            <div className="h-full w-full">
              <div className="max-h-xl mx-auto mt-4 h-80 w-full max-w-xl">
                <div className="h-full w-full bg-[url('./assets/contact-1.png')] bg-contain bg-center bg-no-repeat"></div>
              </div>
            </div>
            <div className="h-full w-full">
              <div className="max-h-xl mx-auto mt-4 h-80 w-full max-w-xl">
                <div className="h-full w-full bg-[url('./assets/contact-1.png')] bg-contain bg-center bg-no-repeat"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="w-full pb-4" data-aos="fade-left">
        <div
          className="my-2 text-center text-xl font-bold"
          data-aos="fade-left"
          data-aos-delay={200}
        >
          台北辦公室
        </div>
        <div className="my-1" data-aos="fade-left" data-aos-delay={400}>
          <FontAwesomeIcon icon="fa-solid fa-phone" className="mr-2" />
          02-23881000
        </div>
        <div className="my-1" data-aos="fade-left" data-aos-delay={600}>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" className="mr-2" />
          台北市中正區館前路34號11樓
        </div>
        <div
          className="h_iframe max-h-xl mx-auto mt-4 h-80 w-full max-w-xl"
          data-aos="fade-left"
          data-aos-delay={800}
        >
          <iframe
            title="taipei-office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6889089815877!2d121.51265641552592!3d25.044629344018134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97338026b33%3A0x366306606b5e2a77!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6aSo5YmN6LevMzTomZ8!5e0!3m2!1szh-TW!2stw!4v1653734090606!5m2!1szh-TW!2stw"
            width="full"
            height="full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
