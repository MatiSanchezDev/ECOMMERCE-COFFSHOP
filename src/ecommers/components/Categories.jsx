export const Categories = () => {
  return (
    <>
      <h2 className="text-5xl sm:text-6xl font-black text-center py-2">
        CATEGORIES
      </h2>
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 hover:bg-orange-200 cursor-pointer">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                src="/wallpaper/cat1.jpg"
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-4xl sm:text-5xl text-gray-900 font-black font-ecommers title-font mb-2">
                  ALL SHOP
                </h2>
                <a className="mt-3 text-orange-900 inline-flex text-lg items-center underline">
                  Go Shop
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-orange-200 cursor-pointer">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                    src="/product/cup1.png"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-2xl sm:text-4xl text-black font-black font-ecommers title-font mb-2 uppercase">
                      Cups
                    </h2>
                    <a className="mt-3 text-orange-900 inline-flex text-lg items-center underline">
                      Go Shop
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-orange-200 cursor-pointer">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                    src="product/pack6.png"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-2xl sm:text-4xl text-black font-black font-ecommers title-font mb-2 uppercase">
                      Packs
                    </h2>
                    <a className="mt-3 text-orange-900 inline-flex text-lg items-center underline">
                      Go Shop
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
