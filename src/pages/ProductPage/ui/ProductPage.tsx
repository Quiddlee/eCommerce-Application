import { useState } from 'react';

import { Rating, ThinStar } from '@smastrom/react-rating';

const customStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FCDE44',
  inactiveFillColor: '#F1F1F1',
};

export default function ProductPage() {
  const [rating, setRating] = useState(4.3);
  return (
    <div className="mx-auto h-full md:max-w-[645px]">
      <div className="relative h-full md:rounded-t-[32px] md:border-12 md:border-text-grey/10">
        {/* <button
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-1 border-white/30 backdrop-blur-md sm:h-14 sm:w-14 md:bottom-6 md:left-5 md:right-auto md:top-auto md:h-10 md:w-10 md:border-accent"
          type="button"
        >
          <img className="md:hidden" src="src/assets/icons/heart.svg" alt="" />
          <img className="hidden md:block" src="src/assets/icons/heart-accent.svg" alt="" />
        </button> */}
        <div className="relative h-full">
          <div className="relative">
            <img className="md:rounded-t-2xl" src="src/assets/img/sushi.png" alt="" />
            {/* <div className="hidden md:absolute md:left-[3%] md:top-[73%] md:block md:rounded-2xl md:p-6 md:backdrop-blur-2xl lg:top-[77%]">
          <h2 className="text-3xl font-bold text-text-dark md:text-white">Vegan Meal</h2>
          <h3 className="mt-5 text-sm font-light text-text-grey md:text-white">622 kcal</h3>
          <h3 className="text-sm font-light text-text-grey md:text-white">340 g</h3>
        </div> */}
          </div>
          {/* <button
            className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-white/30 backdrop-blur-md sm:h-14 sm:w-14"
            type="button"
          >
            <img src="src/assets/icons/arrowLeft.svg" alt="" />
          </button> */}
          {/* bottom-[calc(100%-900px)] */}
          {/* bottom-[calc(100px-1%)] */}
          <div className="absolute top-[calc(400px-20%)] flex flex-col rounded-3xl bg-white px-4 pt-7 sm:px-8">
            <div className="md:hidden">
              <h2 className="text-3xl font-bold text-text-dark md:text-white">Vegan Meal</h2>
              <h3 className="mt-5 text-sm font-light text-text-grey md:text-white">622 kcal</h3>
              <h3 className="mt-1 text-sm font-light text-text-grey md:text-white">340 g</h3>
            </div>
            <div className="flex items-baseline justify-between pt-6 sm:pt-10">
              <div className="flex flex-[50%] flex-col items-center gap-x-2">
                <div className="flex items-center gap-x-2 self-start">
                  <Rating
                    style={{ maxWidth: 180, width: '70%' }}
                    readOnly
                    halfFillMode="svg"
                    itemStyles={customStyles}
                    value={rating}
                    onChange={setRating}
                  />
                  <span className="inline-block self-end text-base font-semibold">{rating}</span>
                </div>
                <p className="self-start pl-1 pt-1 text-sm font-light text-text-grey">2,032 Reviews</p>
              </div>
              <div className="relative">
                <h2 className="pr-4 text-3xl font-bold text-text-dark">$ 24,25</h2>
                <span className="absolute -top-5 left-[4.7rem] text-sm font-light text-text-grey line-through">
                  $ 44,50
                </span>
                <p className="mt-1 text-sm font-light text-accent">You save: 50%</p>
              </div>
            </div>
            <div className="mt-5 md:order-last md:flex md:w-1/2 md:items-center md:justify-end md:gap-x-5 md:self-end md:pb-5">
              <div className="flex items-center gap-x-4">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full border-1 border-text-dark p-2 sm:h-10 sm:w-10 "
                  type="button"
                >
                  -
                </button>
                <span className="sm:text-xl">01</span>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full border-1 border-text-dark p-2 sm:h-10  sm:w-10 "
                  type="button"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="mt-3 block w-full rounded-md bg-accent-lightest py-3 text-accent md:mt-0"
              >
                <span className="mx-auto flex w-fit gap-x-2 font-light">
                  <img src="src/assets/icons/shopping-cart-accent.svg" alt="" />
                  <span className="inline-block">Add to Cart</span>
                </span>
              </button>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-normal text-accent">Description</h3>
              <p className="mt-3 text-[13px] font-light text-text-grey">
                With good planning and an understanding of what makes up a healthy, balanced vegan diet, you can get all
                the nutrients your body needs.
              </p>
            </div>
            <div className="mt-5 pb-8 sm:mt-8">
              <h3 className="text-2xl font-normal text-accent">Ingridients</h3>
              <ul className="mt-3 leading-loose sm:grid sm:grid-cols-2 sm:flex-wrap sm:gap-x-20 lg:gap-x-40">
                <li className="flex items-center text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> 4 oz cream cheese room temperature
                  </span>
                </li>
                <li className="flex items-center gap-x-2 text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> 1/4 cup mayonnaise
                  </span>
                </li>
                <li className="flex items-center gap-x-2 text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> 1/4 cup parmigiano reggiano grated
                  </span>
                </li>
                <li className="flex items-center gap-x-2 text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> 1 egg
                  </span>
                </li>
                <li className="flex items-center gap-x-2 text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> 1 tsp oregano or italian seasoning
                  </span>
                </li>
                <li className="flex items-center gap-x-2 text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> 3/4 cup mozzarella shredded
                  </span>
                </li>
                <li className="flex items-center gap-x-2 text-[13px] font-light text-text-grey md:items-start">
                  <span className="flex items-center gap-x-2 md:gap-x-3">
                    <img src="src/assets/icons/check-icon.svg" alt="" /> Fresh cilantro to taste
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative h-fit border-4 border-accent">
    //   <div className="relative h-40">
    //     <div className="h-1/2 w-full border-4 border-rating-star" />
    //     <div className="absolute bottom-0 left-0 h-1/2 w-full border-2 border-text-dark" />
    //   </div>
    // </div>
  );
}