import img1 from './implant-navigator/1.jpg';
import img2 from './implant-navigator/2.jpg';

export const ModalImplantNavigator = ({
  isShow,
  onChange,
}: {
  isShow: boolean;
  onChange: () => void;
}) => (
  <div
    id="modal-implant-navigator"
    className={`${
      !isShow ? 'hidden' : ''
    } flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50`}
  >
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Хирургический набор - Implant Navigator
          </h3>
          <button
            onClick={onChange}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Ознакомиться с содержимым набора можно по{' '}
            <a
              href="http://ohmyguidemsc.ru/implant-navigator.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              ссылке (pdf)
            </a>
            .
          </p>

          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
    </div>
  </div>
);
