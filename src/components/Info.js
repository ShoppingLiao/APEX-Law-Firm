import Slider from 'react-slick';
const SLIDER_SETTING = {
  dots: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Info() {
  return (
    <div>
      <div
        className="mx-auto mb-4 w-32 border-b text-center text-xl"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        公司簡介
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-once="true"
        className="my-4 text-center"
      >
        <div className="p-2 text-xl font-bold text-yellow-darker">
          <span className="text-3xl font-extrabold">鼎</span>是調和五味的珍貴器皿
        </div>
        <div className="text-blue-darker">代表我們重視您人生中遇到的酸甜苦辣，</div>
        <div className="text-blue-darker">秉持專業與您同舟而濟。</div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-once="true"
        className="my-4 text-center"
      >
        <div className="p-2 text-xl font-bold text-yellow-darker">
          <span className="text-3xl font-extrabold">道</span>是我們攜手同行的正道
        </div>
        <div className="text-blue-darker">亦為我們與您共同迎向的康莊大道。</div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="1500"
        data-aos-once="true"
        className="my-4 text-center"
      >
        <div className="p-2 text-xl font-bold text-yellow-darker">我們的宗旨</div>
        <div className="text-blue-darker">由業界頂尖的人才(APEX)</div>
        <div className="text-blue-darker">給予絕對精準到位的服務</div>
        <div className="text-blue-darker">( Absolutely Precise EXecution )</div>
        <div className="text-blue-darker">與您並肩同行、為您的權利拼搏</div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="2000"
        data-aos-once="true"
        className="max-w-max-w-screen-xs mx-auto p-4 pb-8"
      >
        <Slider {...SLIDER_SETTING} className="mx-auto max-w-xl">
          <div className="h-full w-full">
            <div className="mx-auto h-64 w-96 bg-[url('./assets/info-1.png')] bg-contain bg-center bg-no-repeat" />
          </div>
          <div className="h-full w-full">
            <div className="mx-auto h-64 w-96 bg-[url('./assets/info-2.png')] bg-contain bg-center bg-no-repeat" />
          </div>
          <div className="h-full w-full">
            <div className="mx-auto h-64 w-96 bg-[url('./assets/info-3.jpg')] bg-contain bg-center bg-no-repeat" />
          </div>
          <div className="h-full w-full">
            <div className="mx-auto h-64 w-96 bg-[url('./assets/info-4.jpg')] bg-contain bg-center bg-no-repeat" />
          </div>
          <div className="h-full w-full">
            <div className="mx-auto h-64 w-96 bg-[url('./assets/info-5.jpg')] bg-contain bg-center bg-no-repeat" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Info;
