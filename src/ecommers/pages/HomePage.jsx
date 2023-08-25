import { CardHome } from "../components/CardHome";
import { Categories } from "../components/Categories";
import { HomeSlider } from "../components/HomeSlider";
import { Newsletter } from "../components/Newsletter";
import { Testimonial } from "../components/Testimonial";

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
