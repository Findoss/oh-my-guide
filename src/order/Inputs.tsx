import { useController, type UseControllerProps } from 'react-hook-form';
import { fields } from './config';
import type { FormValues } from './types';

export const Text = (props: UseControllerProps<any>) => {
  const { field, fieldState } = useController(props);
  const filedData = fields[props.name as keyof FormValues];

  return (
    <div className="mb-5">
      <label
        htmlFor={filedData.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {filedData.title}
      </label>
      <input
        {...field}
        type="text"
        placeholder={filedData.placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {fieldState.error && (
        <p className="text-red-500 text-xs">{fieldState.error.message}</p>
      )}
      {filedData.hint && (
        <p className="text-gray-500 text-sm">{filedData.hint}</p>
      )}
    </div>
  );
};

export const Select = (props: UseControllerProps<any>) => {
  const { field, fieldState } = useController(props);
  const filedData = fields[props.name as keyof FormValues];

  return (
    <div className="mb-5">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {filedData.title}
      </label>
      <select
        {...field}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {filedData.placeholder && (
          <option value="" disabled hidden>
            {filedData.placeholder}
          </option>
        )}

        {filedData.options &&
          Object.entries(filedData.options).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
      </select>

      {fieldState.error && (
        <p className="text-red-500 text-xs">{fieldState.error.message}</p>
      )}
      {filedData.hint && (
        <p className="text-gray-500 text-sm">{filedData.hint}</p>
      )}
    </div>
  );
};

export const Checkbox = (props: UseControllerProps<any>) => {
  const { field, fieldState } = useController(props);
  const filedData = fields[props.name as keyof FormValues];

  return (
    <div className="mb-5 md:content-center">
      <label className="inline-flex items-center cursor-pointer">
        <input {...field} type="checkbox" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm">{filedData.title}</span>
      </label>

      {fieldState.error && (
        <p className="text-red-500 text-xs">{fieldState.error.message}</p>
      )}
      {filedData.hint && (
        <p className="text-gray-500 text-sm">{filedData.hint}</p>
      )}
    </div>
  );
};

export const DatePicker = (props: UseControllerProps<any>) => {
  const { field, fieldState } = useController(props);
  const filedData = fields[props.name as keyof FormValues];

  return (
    <div className="mb-5">
      <label
        htmlFor={filedData.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {filedData.title}
      </label>
      <input
        {...field}
        type="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={filedData.placeholder}
      />

      {fieldState.error && (
        <p className="text-red-500 text-xs">{fieldState.error.message}</p>
      )}
      {filedData.hint && (
        <p className="text-gray-500 text-sm">{filedData.hint}</p>
      )}
    </div>
  );
};

export const TextArea = (props: UseControllerProps<any>) => {
  const { field, fieldState } = useController(props);
  const filedData = fields[props.name as keyof FormValues];

  return (
    <div className="mb-5">
      <textarea
        {...field}
        placeholder={filedData.placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {fieldState.error && (
        <p className="text-red-500 text-xs">{fieldState.error.message}</p>
      )}
      {filedData.hint && (
        <p className="text-gray-500 text-sm">{filedData.hint}</p>
      )}
    </div>
  );
};
