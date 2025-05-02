import { Logo } from '../logo';

import { Phone } from '../phone';

export const Header = () => (
  <header className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
    <div className="flex items-center justify-between">
      <Logo />
      <ul className="flex flex-wrap items-center mb-4 text-m font-medium text-gray-500 dark:text-gray-400">
        <li>
          <Phone />
        </li>
      </ul>
    </div>
    <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
  </header>
);
