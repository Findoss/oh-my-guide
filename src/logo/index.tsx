import { headTitle } from '../config';

export const Logo = () => (
  <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
    {/* <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="h-8"
      alt="Flowbite Logo"
    /> */}
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      {headTitle}
    </span>
  </div>
);
