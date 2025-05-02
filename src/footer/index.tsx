import { Logo } from '../logo';
import { headTitle } from '../config';
import { Phone } from '../phone';

export const Footer = () => (
  <footer className="w-full p-4 mt-auto">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="flex flex-wrap items-center mb-4 text-m font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Phone />
          </li>
        </ul>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {headTitle} © {new window.Date().getFullYear()}
      </span>
    </div>
  </footer>
);
