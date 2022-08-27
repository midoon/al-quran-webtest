import banner from "../assets/img/Banner.jpg";
import brsection from "../assets/img/Br-section.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full" alt="" />
        </div>
        <div className="absolute px-2 font-bold top-28 lg:text-7xl lg:top-96 lg:px-8">
          <h1 className="text-secondary">Read Qur'an Everyday </h1>
          <h1 className="text-secondary">Add On Your Daily</h1>
          <h1 className="text-secondary">Routine</h1>
        </div>
      </div>
      {/* batas br section */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={brsection} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
