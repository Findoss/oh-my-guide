import { fields, mouth, url } from '../config';

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
          let quadrant;
          if (rowIndex === 0) { // Верхняя челюсть
            quadrant = toothsIndex + 1; // Будет 1, затем 2
          } else { // Нижняя челюсть
            quadrant = 4 - toothsIndex; // Будет 4, затем 3
          }
          const idTooth: IdTooth = `${quadrant}.${tooth}`;

          text.push(`<td style="padding: 5px;"">
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
  <tr>
    <td style="padding: 5px;">${fields.organization.title}</td>
    <td style="padding: 5px;">${rawData.organization}</td>
  </tr>
  <tr>
    <td style="padding: 5px;">${fields.customerName.title}</td>
    <td style="padding: 5px;">${rawData.customerName}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.phone.title}</td>
      <td style="padding: 5px;">${rawData.phone}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.actualAddressDelivery.title}</td>
      <td style="padding: 5px;">${rawData.actualAddressDelivery}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.communicationApp.title}</td>
      <td style="padding: 5px;">${fields.communicationApp.options &&
    fields.communicationApp.options[rawData.communicationApp]
    }</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.patientName.title}</td>
      <td style="padding: 5px;">${rawData.patientName}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.operationDate.title}</td>
      <td style="padding: 5px;">${new Intl.DateTimeFormat('ru-RU').format(
      new Date(rawData.operationDate)
    )}</td>
  </tr>
  <tr>
    <td style="padding: 5px;">${fields.kindOfWork.title}</td>
    <td style="padding: 5px;">${fields.kindOfWork.options && fields.kindOfWork.options[rawData.kindOfWork]
    }</td>
  </tr>
  ${rawData.kindOfWork === '0' /* Хирургический набор */
      ? `<tr>
      <td style="padding: 5px;">${fields.teethToggle.title}</td>
      <td style="padding: 5px;">${rawData.teethToggle ? 'Да' : 'Нет'}</td>
  </tr>
  ${rawData.teethToggle /* Коронки */
        ? `<tr>
      <td style="padding: 5px;">${fields.toothColor.title}</td>
      <td style="padding: 5px;">${fields.toothColor.options &&
        fields.toothColor.options[rawData.toothColor]
        }</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.prosthesisType.title}</td>
      <td style="padding: 5px;">${fields.prosthesisType.options &&
        fields.prosthesisType.options[rawData.prosthesisType]
        }</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.reinforcementToggle.title}</td>
      <td style="padding: 5px;">${rawData.reinforcementToggle ? 'Да' : 'Нет'
        }</td>
  </tr>
  `
        : ''
      }
  <tr>
      <td style="padding: 5px;">${fields.implantSystem.title}</td>
      <td style="padding: 5px;">${rawData.implantSystem}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.implantProtocol.title}</td>
      <td style="padding: 5px;">${fields.implantProtocol.options &&
      fields.implantProtocol.options[rawData.implantProtocol]
      }</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.surgicalKit.title}</td>
      <td style="padding: 5px;">${rawData.surgicalKit}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.pinSystem.title}</td>
      <td style="padding: 5px;">${rawData.pinSystem}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.sleeveToggle.title}</td>
      <td style="padding: 5px;">${rawData.sleeveToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.surgkitRentalToggle.title}</td>
      <td style="padding: 5px;">${rawData.surgkitRentalToggle ? 'Да' : 'Нет'
      }</td>
  </tr>
  ${rawData.surgkitRentalToggle
        ? `
    <tr>
      <td style="padding: 5px;">${fields.implantGuides.title}</td>
      <td style="padding: 5px;">${fields.implantGuides.options &&
        fields.implantGuides.options[rawData.implantGuides]
        }</td>
  </tr>
  `
        : ''
      }
  <tr>
      <td style="padding: 5px;">${fields.sourceFiles.title}</td>
      <td style="padding: 5px;">${fields.sourceFiles.options &&
      fields.sourceFiles.options[rawData.sourceFiles]
      }</td>
  </tr>
  <tr>
      <td style="padding: 5px;">${fields.sourceFilesLink.title}</td>
      <td style="padding: 5px;">${rawData.sourceFilesLink}</td>
  </tr>`
      : ''
    }
  <tr>
      <td style="padding: 5px;">${fields.comment.title}</td>
      <td style="padding: 5px;">${rawData.comment}</td>
  </tr>
  <tr >
      <td colspan="2">
          ${rawData.kindOfWork === '0' /* Хирургический набор */
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
