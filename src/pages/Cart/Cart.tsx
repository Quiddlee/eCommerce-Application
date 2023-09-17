import CartItem from '../../widgets/CartItem/CartItem';

export default function Cart() {
  return (
    <div
      className="
      mx-auto
      my-28
      border-b-2
      border-text-grey/30
      px-6 
      dark:text-primary
      sm:mt-16
      sm:px-28
      lg:fixed
      lg:mx-3
      lg:px-0 lg:py-[6px] xl:w-[332px]
"
    >
      <h2 className="mb-6 text-xl sm:mt-24 lg:mt-10">Your order</h2>
      <CartItem productId="04f60ec8-bce0-4b2d-9d1f-610397b13763" />
      <CartItem productId="04f60ec8-bce0-4b2d-9d1f-610397b13763" />
      <CartItem productId="04f60ec8-bce0-4b2d-9d1f-610397b13763" />
    </div>
  );
}
