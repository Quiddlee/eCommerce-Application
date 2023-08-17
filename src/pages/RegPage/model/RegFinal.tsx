import { Link } from 'react-router-dom';

import accentGulp from '../../../assets/icons/AccentGulp.svg';
import redCross from '../../../assets/icons/RedCross.svg';

export default function RegFinal(props: {
  isSuccess: boolean;
  reStartForm: () => void;
  setIsFormSubmitted: (arg: boolean) => void;
}) {
  const { isSuccess, reStartForm, setIsFormSubmitted } = props;
  return (
    <div
      className=" 
      ml-3
      mr-3
      box-border
      flex 
      w-10/12 
      flex-col 
      items-center 
      rounded-3xl 
      border-2 
      border-separation-line 
      pb-2 
      pl-4 
      pr-4 
      pt-2
      sm:w-128
    "
    >
      <h3 className="text-5xl font-medium text-text-dark">{isSuccess ? 'Success!' : 'Oh snap!'}</h3>
      <p className="text-base text-text-grey">
        {isSuccess ? 'Your account has been created' : 'Change a few things up and try submitting again'}
      </p>
      <div
        className={`
        relative
        mt-8
        h-30 
        w-30
        rounded-full 
        border-3
        ${isSuccess ? 'border-accent' : 'border-shop-cart-red'}
        flex
        justify-center
      `}
      >
        <img src={isSuccess ? accentGulp : redCross} alt="" />
      </div>
      <Link
        onClick={() => {
          reStartForm;
          setIsFormSubmitted(false);
        }}
        to={isSuccess ? '/' : '/registration'}
        className="
          mb-9 
          mt-9 
          h-10 
          rounded-lg 
          bg-accent 
          p-2 
          text-primary
        "
      >
        Continue
      </Link>
    </div>
  );
}
