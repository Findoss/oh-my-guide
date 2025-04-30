/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Text, Select, DatePicker, Checkbox, TextArea } from './Inputs';
import { TeethGrid } from './TeethGrid';

import {
  defaultValueFields,
  email,
  fields,
  headTitle,
  initStateMouth,
  mouth,
  parts,
  restListFieldsKindOfWork,
  restListFieldsSourceFiles,
  restListFieldsSurgkitRentalToggle,
  restListFieldsTeethToggle,
  submitTitle,
  subtitle,
  textError,
  textSuccess,
  title,
  validationSchema,
} from './config';
import { sendForm } from './send';

import type { FormValues } from './types';
import { ModalSuccess } from './ModalSuccess';
import { ModalImplantNavigator } from './ModalImplantNavigator';
import { ModalTermsOfService } from './ModalTermsOfService';

export const OrderForm = () => {
  const { control, handleSubmit, watch, resetField } = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: defaultValueFields,
    // @ts-expect-error
    resolver: yupResolver(validationSchema),
  });
  const [showModalSuccess, toggleModalSuccess] = useState(false);
  const [showModalImplantNavigator, toggleModalModalImplantNavigator] =
    useState(false);
  const [showModalTermsOfService, toggleModalModalTermsOfService] =
    useState(false);
  const [textSendForm, setTextSendForm] = useState('');

  const kindOfWork = watch(fields.kindOfWork.name);
  const teethToggle = watch(fields.teethToggle.name);
  const surgkitRentalToggle = watch(fields.surgkitRentalToggle.name);
  const sourceFiles = watch(fields.sourceFiles.name);

  const onChangeModalSuccess = () => toggleModalSuccess((v) => !v);
  const onChangeModalImplantNavigator = () =>
    toggleModalModalImplantNavigator((v) => !v);
  const onChangeModalTermsOfService = () =>
    toggleModalModalTermsOfService((v) => !v);

  useEffect(() => {
    restListFieldsKindOfWork.map((field) => {
      resetField(field);
    });
  }, [kindOfWork, resetField]);

  useEffect(() => {
    restListFieldsSourceFiles.map((field) => {
      resetField(field);
    });
  }, [resetField, sourceFiles]);

  useEffect(() => {
    restListFieldsSurgkitRentalToggle.map((field) => {
      resetField(field);
    });
  }, [resetField, surgkitRentalToggle]);

  useEffect(() => {
    restListFieldsTeethToggle.map((field) => {
      resetField(field);
    });
  }, [resetField, teethToggle]);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    sendForm(data)
      .then((data) => {
        if (data.status === 200) {
          setTextSendForm(textSuccess);
          onChangeModalSuccess();
        }
      })
      .catch((error) => {
        setTextSendForm(`${textError} - ${error}`);
        onChangeModalSuccess();
      });
  };

  return (
    <>
      <ModalSuccess
        text={textSendForm}
        isShow={showModalSuccess}
        onChange={onChangeModalSuccess}
      />
      <ModalImplantNavigator
        isShow={showModalImplantNavigator}
        onChange={onChangeModalImplantNavigator}
      />
      <ModalTermsOfService
        isShow={showModalTermsOfService}
        onChange={onChangeModalTermsOfService}
      />
      <header className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {headTitle}
          </span>
        </div>
      </header>

      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
        <form
          // @ts-expect-error
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[800px]"
        >
          <h1 className="text-3xl">{title}</h1>
          <h2 className="text-2xl">{subtitle}</h2>
          <br />

          <div className="block p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
            <h3 className="text-xl">{parts[1]}</h3>
            <br />

            <div className="grid md:grid-cols-2 md:gap-6">
              <Text control={control} name={fields.organization.name} />
              <Text control={control} name={fields.customerName.name} />
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <Select control={control} name={fields.communicationApp.name} />
              <Text control={control} name={fields.phone.name} />
            </div>

            <Text control={control} name={fields.actualAddressDelivery.name} />

            <div className="grid md:grid-cols-2 md:gap-6">
              <Text control={control} name={fields.patientName.name} />
              <DatePicker control={control} name={fields.operationDate.name} />
            </div>

            <Select control={control} name={fields.kindOfWork.name} />
          </div>

          {kindOfWork === '0' /* хирургический шаблон */ && (
            <>
              <div className="block p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
                <h3 className="text-xl">{parts[2]}</h3>
                <br />
                <div className="mb-5">
                  <Checkbox control={control} name={fields.teethToggle.name} />
                </div>
                {Boolean(teethToggle) && (
                  <div className="grid md:grid-cols-3 md:gap-6">
                    <Select control={control} name={fields.toothColor.name} />
                    <Select
                      control={control}
                      name={fields.prosthesisType.name}
                    />
                    <Checkbox
                      control={control}
                      name={fields.reinforcementToggle.name}
                    />
                  </div>
                )}

                <Controller
                  name={fields.teethGrid.name}
                  control={control}
                  defaultValue={initStateMouth}
                  render={({ field }) => (
                    // @ts-expect-error
                    <TeethGrid
                      gridMouth={mouth}
                      isShowBottom={true}
                      isShowTop={Boolean(teethToggle)}
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="block p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
                <h3 className="text-xl">{parts[3]}</h3>
                <br />

                <div className="grid md:grid-cols-3 md:gap-6">
                  <Text control={control} name={fields.implantSystem.name} />
                  <Select
                    control={control}
                    name={fields.implantProtocol.name}
                  />
                  <Text control={control} name={fields.surgicalKit.name} />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <Text control={control} name={fields.pinSystem.name} />
                  <Checkbox control={control} name={fields.sleeveToggle.name} />
                </div>

                <div className="mb-5">
                  <Checkbox
                    control={control}
                    name={fields.surgkitRentalToggle.name}
                  />
                  <p className="text-gray-500 text-sm">
                    Мы предоставляем в аренду универсальный{' '}
                    <span
                      onClick={onChangeModalImplantNavigator}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      хирургический набор
                    </span>
                  </p>
                </div>

                {Boolean(surgkitRentalToggle) && (
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <Select
                      control={control}
                      name={fields.implantGuides.name}
                    />
                  </div>
                )}
              </div>

              <div className="block p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
                <h3 className="text-xl">{parts[4]}</h3>
                <br />
                <div className="grid md:grid-cols-2 md:gap-6 ">
                  <Select control={control} name={fields.sourceFiles.name} />
                  {sourceFiles === '2' /* Другое */ && (
                    <Text
                      control={control}
                      name={fields.sourceFilesLink.name}
                    />
                  )}
                  {sourceFiles === '0' /* Email */ && (
                    <div className="mb-5 md:content-center">{email}</div>
                  )}
                </div>
              </div>
            </>
          )}

          {kindOfWork !== '' /* любой не пустой */ && (
            <div className="block p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
              <h3 className="text-xl">{parts[5]}</h3>
              <br />
              <TextArea control={control} name={fields.comment.name} />
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className='w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"'
            >
              {submitTitle}
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Отправляя данные, вы даете согласие на{' '}
            <span
              onClick={onChangeModalTermsOfService}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              «Обработку персональных данных»
            </span>
          </p>
        </form>
      </div>

      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {headTitle} © {new window.Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
};
