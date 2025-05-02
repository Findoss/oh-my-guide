import { headPhone, linkPhone } from '../config';

export const Phone = () => (
  <a
    className="font-medium text-green-600 dark:text-green-500 hover:underline"
    href={`tel:${linkPhone}`}
  >
    {headPhone}
  </a>
);
