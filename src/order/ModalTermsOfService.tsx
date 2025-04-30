export const ModalTermsOfService = ({
  isShow,
  onChange,
}: {
  isShow: boolean;
  onChange: () => void;
}) => (
  <div
    id="modal-terms-of-service"
    className={`${
      !isShow ? 'hidden' : ''
    } flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-700/50`}
  >
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Соглашение на обработку персональных данных:
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
            <span>
              Настоящим в соответствии с Федеральным законом № 152-ФЗ «О
              персональных данных» от 27.07.2006 года Вы подтверждаете свое
              согласие на обработку персональных данных: сбор, систематизацию,
              накопление, хранение, уточнение (обновление, изменение),
              использование, передачу исключительно в целях продажи программного
              обеспечения на Ваше имя, как это описано ниже, блокирование,
              обезличивание, уничтожение.
            </span>
            <br />
            <span>
              Мы гарантируем конфиденциальность получаемой информации. Обработка
              персональных данных осуществляется в целях эффективного исполнения
              заказов, договоров и иных обязательств, принятых нами в качестве
              обязательных к исполнению.
            </span>
            <br />
            <span>
              В случае необходимости предоставления Ваших персональных данных
              правообладателю, дистрибьютору или реселлеру программного
              обеспечения в целях регистрации программного обеспечения на ваше
              имя, вы даёте согласие на передачу ваших персональных данных. Мы
              гарантируем, что правообладатель, дистрибьютор или реселлер
              программного обеспечения осуществляет защиту персональных данных
              на условиях, аналогичных изложенным в Политике конфиденциальности
              персональных данных.
            </span>
            <br />
            <span>
              Настоящее согласие распространяется на следующие Ваши персональные
              данные: фамилия, имя и отчество, адрес электронной почты, почтовый
              адрес доставки заказов, контактный телефон.
            </span>
            <br />
            <span>Срок действия согласия является неограниченным.</span>
            <br />
            <span>
              Гарантирую, что представленная мной информация является полной,
              точной и достоверной, а также что при представлении информации не
              нарушаются действующее законодательство Российской Федерации,
              законные права и интересы третьих лиц. Вся представленная
              информация заполнена мною в отношении себя лично.
            </span>
            <br />
            <span>
              Настоящее согласие действует в течение всего периода хранения
              персональных данных, если иное не предусмотрено законодательством
              Российской Федерации.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
