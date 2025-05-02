import { boolean, object, string } from 'yup';
import type {
  FieldsData,
  FormValues,
  GridMouth,
  IdTooth,
  StateMouth,
} from './order/types';

const IS_PROD = window.location.hostname !== 'localhost';

export const headTitle = 'Oh my GUIDE';
export const headPhone = '8 (928) 846-37-68';
export const linkPhone = '89288463768';
export const title = 'Заказ-наряд';
export const subtitle = 'Навигационный хирургический шаблон';
export const submitTitle = 'Отправить';

export const textSuccess = 'Форма успешно отправлена';
export const textError = 'Ошибка';

export const email = IS_PROD ? 'oh.myguide@yandex.ru' : 'findoss@yandex.ru';
export const url = IS_PROD
  ? 'https://gistoyidosk.beget.app/webhook/9d922671-0964-46e1-a7ab-45bf470cfb0b'
  : 'https://gistoyidosk.beget.app/webhook-test/9d922671-0964-46e1-a7ab-45bf470cfb0b';

export const parts = {
  1: 'Общая информация',
  2: 'Схема имплантатов',
  3: 'Информация об имплантатах',
  4: 'Данные пациента',
  5: 'Комментарий',
};

export const mouth: GridMouth = [
  [
    [8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ],
  [
    [8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ],
];

const generationInitState = () => {
  const initState: StateMouth = {};
  mouth.map((row, rowIndex) => {
    row.map((tooths, toothsIndex) => {
      tooths.map((tooth) => {
        const idTooth: IdTooth = `${
          rowIndex + rowIndex + toothsIndex + 1
        }.${tooth}`;
        initState[idTooth] = {
          top: false,
          bottom: false,
        };
      });
    });
  });
  return initState;
};

export const initStateMouth: StateMouth = generationInitState();

export const fields: FieldsData = {
  organization: {
    name: 'organization',
    title: 'Организация',
    placeholder: 'Организация',
  },
  customerName: {
    name: 'customerName',
    title: 'ФИО заказчика',
    placeholder: 'Петров П. П.',
  },
  phone: {
    name: 'phone',
    title: 'Номер телефона',
    placeholder: '892812312312',
  },
  actualAddressDelivery: {
    name: 'actualAddressDelivery',
    title: 'Фактический адрес',
    placeholder: 'Адрес доставки',
  },
  communicationApp: {
    name: 'communicationApp',
    title: 'Способ связи',
    placeholder: 'Выберите способ связи',
    options: {
      '0': 'Telegram',
      '1': 'WahatsApp',
    },
  },
  patientName: {
    name: 'patientName',
    title: 'ФИО пациента',
    placeholder: 'Иванов И. И.',
  },
  operationDate: {
    name: 'operationDate',
    title: 'Дата операции',
  },
  kindOfWork: {
    name: 'kindOfWork',
    title: 'Вид работы',
    placeholder: 'Выберите вид работы',
    options: {
      '0': 'Хирургический шаблон',
      '1': 'Временная коронка',
      '2': 'Цифровой ваксап',
      // '3': 'Армирование немедленной нагрузки до 4х опор', // отключил по запросу заказчика
      // '4': 'Армирование до 6ти опор', // отключил по запросу заказчика
      '5': '3Д печать хирургического шаблона',
      '6': 'Рентгеноконтраст ный шаблон для КТ',
      '7': 'Прикусной шаблон на жестком базисе',
    },
  },
  teethToggle: {
    name: 'teethToggle',
    title: 'Временные коронки',
    hint: 'Выберите, если планируется немедленная нагрузка',
  },
  implantSystem: {
    name: 'implantSystem',
    title: 'Система имплантатов',
  },
  implantProtocol: {
    name: 'implantProtocol',
    title: 'Протокол',
    placeholder: 'Выберете протокол',
    options: {
      '0': 'Полный',
      '1': 'Пилотный',
    },
  },
  surgicalKit: {
    name: 'surgicalKit',
    title: 'Хирургический набор',
    placeholder: 'Название',
  },
  pinSystem: {
    name: 'pinSystem',
    title: 'Система фиксирующих пинов',
  },
  sleeveToggle: {
    name: 'sleeveToggle',
    title: 'Укомплектовать втулками',
  },
  surgkitRentalToggle: {
    name: 'surgkitRentalToggle',
    title: 'Аренда хирургического набора',
  },
  implantGuides: {
    name: 'implantGuides',
    title: 'Имплантоводы',
    placeholder: 'Выберите имплантоводы',
    options: {
      '0': 'Dentium',
      '1': 'Strauman BLT',
      '2': 'Neodent',
      '3': 'Osstemv',
      '4': 'Astra tx 3.5',
    },
  },
  sourceFiles: {
    name: 'sourceFiles',
    title: 'КЛКТ и сканы отправлены',
    options: {
      '0': 'Email',
      '1': 'Telegram',
      '2': 'Другое',
    },
  },
  comment: {
    name: 'comment',
    title: 'Комментарий',
    placeholder:
      'Уточните важные моменты. Например: редукция, откидывание лоскута и т.п.',
  },
  sourceFilesLink: {
    name: 'sourceFilesLink',
    title: 'Ссылка на КЛКТ',
    hint: 'Убедитесь что открыт доступ по ссылке',
  },
  toothColor: {
    name: 'toothColor',
    title: 'Цвет коронок',
    placeholder: 'Выберите цвет',
    options: {
      '0': 'A1',
      '1': 'A2',
      '2': 'A3',
      '3': 'A4',
    },
  },
  prosthesisType: {
    name: 'prosthesisType',
    title: 'Тип протеза',
    placeholder: 'Выберите тип протеза',
    options: {
      '0': 'fp 1',
      '1': 'fp 2',
      '2': 'fp 3',
    },
  },
  reinforcementToggle: {
    name: 'reinforcementToggle',
    title: 'Армирование',
  },
  teethGrid: {
    name: 'teethGrid',
    title: 'Схема имплантатов',
  },
};

export const defaultValueFields: FormValues = {
  organization: '',
  customerName: '',
  phone: '',
  actualAddressDelivery: '',
  communicationApp: '',
  patientName: '',
  operationDate: '',
  kindOfWork: '',
  teethToggle: false,
  implantSystem: '',
  implantProtocol: '',
  surgicalKit: '',
  pinSystem: '',
  sleeveToggle: false,
  surgkitRentalToggle: false,
  implantGuides: '',
  sourceFiles: '0',
  comment: '',
  sourceFilesLink: '',
  toothColor: '',
  prosthesisType: '',
  reinforcementToggle: false,
  teethGrid: initStateMouth,
};

export const restListFieldsKindOfWork: (keyof FormValues)[] = [
  'teethToggle',
  'implantSystem',
  'implantProtocol',
  'surgicalKit',
  'pinSystem',
  'sleeveToggle',
  'surgkitRentalToggle',
  'implantGuides',
  'sourceFiles',
  'comment',
  'sourceFilesLink',
  'toothColor',
  'prosthesisType',
  'reinforcementToggle',
];

export const restListFieldsTeethToggle: (keyof FormValues)[] = [
  'toothColor',
  'prosthesisType',
  'reinforcementToggle',
  'teethGrid',
];

export const restListFieldsSurgkitRentalToggle: (keyof FormValues)[] = [
  'implantGuides',
];

export const restListFieldsSourceFiles: (keyof FormValues)[] = [
  'sourceFilesLink',
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = object().shape({
  organization: string()
    .required(`${fields.organization.title} обязательное поле`)
    .min(3, `${fields.organization.title} должно быть минимум 3 символа`),
  customerName: string()
    .required(`${fields.customerName.title} обязательное поле`)
    .min(3, `${fields.customerName.title} должно быть минимум 3 символа`),
  phone: string()
    .required(`${fields.phone.title} обязательное поле`)
    .matches(phoneRegExp, 'Номер телефона не правильный'),
  communicationApp: string().required(
    `${fields.communicationApp.title} обязательное поле`
  ),
  actualAddressDelivery: string().required(
    `${fields.actualAddressDelivery.title} обязательное поле`
  ),
  patientName: string().required(
    `${fields.patientName.title} обязательное поле`
  ),
  operationDate: string().required(
    `${fields.operationDate.title} обязательное поле`
  ),
  kindOfWork: string().required(`${fields.kindOfWork.title} обязательное поле`),
  teethToggle: boolean(),
  toothColor: string().when(
    [fields.teethToggle.name],
    ([teethToggle], schema) => {
      if (teethToggle) {
        return schema.required(`${fields.toothColor.title} обязательное поле`);
      }
      return schema;
    }
  ),
  prosthesisType: string().when(
    [fields.teethToggle.name],
    ([teethToggle], schema) => {
      if (teethToggle) {
        return schema.required(
          `${fields.prosthesisType.title} обязательное поле`
        );
      }
      return schema;
    }
  ),
  reinforcementToggle: boolean(),
  implantProtocol: string().when(
    [fields.kindOfWork.name],
    ([kindOfWork], schema) => {
      if (kindOfWork === '0' /* Хирургический набор */) {
        return schema.required(
          `${fields.implantProtocol.title} обязательное поле`
        );
      }
      return schema;
    }
  ),
  surgicalKit: string().when(
    [fields.kindOfWork.name],
    ([kindOfWork], schema) => {
      if (kindOfWork === '0' /* Хирургический набор */) {
        return schema.required(`${fields.surgicalKit.title} обязательное поле`);
      }
      return schema;
    }
  ),
  pinSystem: string().when([fields.kindOfWork.name], ([kindOfWork], schema) => {
    if (kindOfWork === '0' /* Хирургический набор */) {
      return schema.required(`${fields.pinSystem.title} обязательное поле`);
    }
    return schema;
  }),
  implantSystem: string().when(
    [fields.kindOfWork.name],
    ([kindOfWork], schema) => {
      if (kindOfWork === '0' /* Хирургический набор */) {
        return schema.required(
          `${fields.implantSystem.title} обязательное поле`
        );
      }
      return schema;
    }
  ),
  implantGuides: string().when(
    [fields.surgkitRentalToggle.name],
    ([surgkitRentalToggle], schema) => {
      if (surgkitRentalToggle) {
        return schema.required(
          `${fields.implantGuides.title} обязательное поле`
        );
      }
      return schema;
    }
  ),
  sourceFiles: string().when(
    [fields.kindOfWork.name],
    ([kindOfWork], schema) => {
      if (kindOfWork === '0' /* Хирургический набор */) {
        return schema.required(`${fields.sourceFiles.title} обязательное поле`);
      }
      return schema;
    }
  ),
  sourceFilesLink: string().when(
    [fields.sourceFiles.name],
    ([sourceFiles], schema) => {
      if (sourceFiles === '2' /* Другое */) {
        return schema.required(
          `${fields.sourceFilesLink.title} обязательное поле`
        );
      }
      return schema;
    }
  ),
  comment: string(),
});
