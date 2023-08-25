export const Testimonial = () => {
  return (
    <section className="text-black body-font bg-orange-100 w-full shadow-md">
      <div className="container px-5 py-10 sm:py-24 mx-auto">
        <h1 className="text-5xl sm:text-6xl font-ecommers font-black text-black mb-12 text-center uppercase">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-pink-900  bg-opacity-40 p-8 rounded shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-orange-900 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                I work long hours and have a family, so for me, Coff-Shop coffee
                is a life saver! My go-to coffee that keeps me fueled up for the
                long haul, each and every day. The different flavor offerings
                will make sure you&apos;re covered regardless of what
                you&apos;re feeling that day as well!
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="/icons/icon5.png"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-BLACK">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-800 text-sm">INFLUENCER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-pink-900 bg-opacity-40 p-8 rounded shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-orange-900 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                I&apos;m not the biggest coffee drinker, and prefer cold drinks
                over hot, which is why I love the Madrinas Fruit Fuelers—they
                taste great, give me that morning energy burst I need, AND are
                low calorie and low sugar. Plus with so many servings per tub
                it&apos;s so much cheaper than an energy drink or soda!
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="/icons/icon6.png"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-BLACK">
                    Alper Kamu
                  </span>
                  <span className="text-gray-800 text-sm">ARCHITECT</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
