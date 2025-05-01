import { fields, mouth, url } from './config';

import type {
  FieldsData,
  FormValues,
  GridMouth,
  IdTooth,
  StateMouth,
} from './types';

const formatEmail = (
  fields: FieldsData,
  gridMouth: GridMouth,
  rawData: FormValues
) => {
  const textGridMouth = (gridMouth: GridMouth, stateMouth: StateMouth) => {
    const text = [];
    text.push(`<table border="1" cellspacing="0" cellpadding="0">`);

    gridMouth.forEach((row, rowIndex) => {
      text.push('<tr>');

      row.forEach((tooths, toothsIndex) => {
        tooths.forEach((tooth) => {
          const idTooth: IdTooth = `${
            rowIndex + rowIndex + toothsIndex + 1
          }.${tooth}`;
          text.push(`<td style="padding: 5px;">
            <div>
              ${stateMouth[idTooth].top ? '🟩' : '⬜'}
            </div>
            <div>
              ${idTooth}
            </div>
            <div>
            ${stateMouth[idTooth].bottom ? '❇️' : '⬜'}
            </div>
          </td>`);
        });
      });
      text.push('</tr>');
    });

    text.push('</table>');
    const f = text.join('');

    return f;
  };

  const text = (
    fields: FieldsData,
    gridMouth: GridMouth,
    rawData: FormValues
  ) => `
  <table border="1" cellspacing="0" cellpadding="0">
  <tr border="1">
    <td border="0">${fields.organization.title}</td>
    <td border="0">${rawData.organization}</td>
  </tr>
  <tr border="1">
    <td>${fields.customerName.title}</td>
    <td>${rawData.customerName}</td>
  </tr>
  <tr border="1">
      <td>${fields.phone.title}</td>
      <td>${rawData.phone}</td>
  </tr>
  <tr border="1">
      <td>${fields.actualAddressDelivery.title}</td>
      <td>${rawData.actualAddressDelivery}</td>
  </tr>
  <tr border="1">
      <td>${fields.communicationApp.title}</td>
      <td>${
        fields.communicationApp.options &&
        fields.communicationApp.options[rawData.communicationApp]
      }</td>
  </tr>
  <tr border="1">
      <td>${fields.patientName.title}</td>
      <td>${rawData.patientName}</td>
  </tr>
  <tr border="1">
      <td>${fields.operationDate.title}</td>
      <td>${rawData.operationDate}</td>
  </tr>
  <tr border="1">
    <td>${fields.kindOfWork.title}</td>
    <td>${
      fields.kindOfWork.options && fields.kindOfWork.options[rawData.kindOfWork]
    }</td>
  </tr>
  ${
    rawData.kindOfWork === '0' /* Хирургический набор */
      ? `<tr border="1">
      <td>${fields.teethToggle.title}</td>
      <td>${rawData.teethToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr border="1">
      <td>${fields.toothColor.title}</td>
      <td>${
        fields.toothColor.options &&
        fields.toothColor.options[rawData.toothColor]
      }</td>
  </tr>
  <tr border="1">
      <td>${fields.prosthesisType.title}</td>
      <td>${
        fields.prosthesisType.options &&
        fields.prosthesisType.options[rawData.prosthesisType]
      }</td>
  </tr>
  <tr border="1">
      <td>${fields.reinforcementToggle.title}</td>
      <td>${rawData.reinforcementToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr border="1">
      <td>${fields.implantSystem.title}</td>
      <td>${rawData.implantSystem}</td>
  </tr>
  <tr border="1">
      <td>${fields.implantProtocol.title}</td>
      <td>${
        fields.implantProtocol.options &&
        fields.implantProtocol.options[rawData.implantProtocol]
      }</td>
  </tr>
  <tr border="1">
      <td>${fields.surgicalKit.title}</td>
      <td>${rawData.surgicalKit}</td>
  </tr>
  <tr border="1">
      <td>${fields.pinSystem.title}</td>
      <td>${rawData.pinSystem}</td>
  </tr>
  <tr border="1">
      <td>${fields.sleeveToggle.title}</td>
      <td>${rawData.sleeveToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr border="1">
      <td>${fields.surgkitRentalToggle.title}</td>
      <td>${rawData.surgkitRentalToggle ? 'Да' : 'Нет'}</td>
  </tr>
  ${
    rawData.surgkitRentalToggle
      ? `
    <tr border="1">
      <td>${fields.implantGuides.title}</td>
      <td>${
        fields.implantGuides.options &&
        fields.implantGuides.options[rawData.implantGuides]
      }</td>
  </tr>
  `
      : ''
  }
  <tr border="1">
      <td>${fields.sourceFiles.title}</td>
      <td>${
        fields.sourceFiles.options &&
        fields.sourceFiles.options[rawData.sourceFiles]
      }</td>
  </tr>
  <tr border="1">
      <td>${fields.sourceFilesLink.title}</td>
      <td>${rawData.sourceFilesLink}</td>
  </tr>`
      : ''
  }
  <tr border="1">
      <td>${fields.comment.title}</td>
      <td>${rawData.comment}</td>
  </tr>
  <tr border="1" >
      <td colspan="2">
          ${
            rawData.kindOfWork === '0' /* Хирургический набор */
              ? `<div>${fields.teethGrid.title}</div>${textGridMouth(
                  gridMouth,
                  rawData.teethGrid
                )}`
              : ''
          }
      </td>
  </tr>
  </table>
  <br />
  `;

  return text(fields, gridMouth, rawData).replace(/\s{2,}/g, ' ');
};

export const sendForm = (rawData: FormValues) => {
  const payload = formatEmail(fields, mouth, rawData);
  console.log(payload);

  return fetch(url, {
    method: 'POST',
    body: payload,
  });
};
