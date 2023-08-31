import {
  CardHome,
  Categories,
  HomeSlider,
  Newsletter,
  Testimonial,
} from "../components/";

export const HomePage = () => {
  return (
    <>
      <div className="w-[80%]">
        <HomeSlider />
        <CardHome />
      </div>
      <Categories />
      <Testimonial />
      <Newsletter />
    </>
  );
};
