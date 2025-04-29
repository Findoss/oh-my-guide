import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Text, Select, DatePicker, Checkbox, TextArea } from './Inputs';
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
  title,
  validationSchema,
} from './config';
import { TeethGrid } from './TeethGrid';
import { sendForm } from './send';
import type { FormValues } from './types';

export const OrderForm = () => {
  const { control, handleSubmit, watch, resetField } = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: defaultValueFields,
    resolver: yupResolver(validationSchema),
  });

  const kindOfWork = watch(fields.kindOfWork.name);
  const teethToggle = watch(fields.teethToggle.name);
  const surgkitRentalToggle = watch(fields.surgkitRentalToggle.name);
  const sourceFiles = watch(fields.sourceFiles.name);

  useEffect(() => {
    restListFieldsKindOfWork.map((field) => {
      resetField(field);
    });
  }, [kindOfWork]);

  useEffect(() => {
    restListFieldsSourceFiles.map((field) => {
      resetField(field);
    });
  }, [sourceFiles]);

  useEffect(() => {
    restListFieldsSurgkitRentalToggle.map((field) => {
      resetField(field);
    });
  }, [surgkitRentalToggle]);

  useEffect(() => {
    restListFieldsTeethToggle.map((field) => {
      resetField(field);
    });
  }, [teethToggle]);

  const onSubmit = (data: any) => {
    console.log(data);
    sendForm(data);
  };

  return (
    <>
      <header className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {headTitle}
          </span>
        </div>
      </header>

      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
        <form
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
                <Checkbox control={control} name={fields.teethToggle.name} />
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

                <Checkbox
                  control={control}
                  name={fields.surgkitRentalToggle.name}
                />
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

          <div className="block p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700 ">
            <h3 className="text-xl">{parts[5]}</h3>
            <br />
            <TextArea control={control} name={fields.comment.name} />
          </div>

          <div className="flex justify-center ">
            <button
              type="submit"
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"'
            >
              {submitTitle}
            </button>
          </div>
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
