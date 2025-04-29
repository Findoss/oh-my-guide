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
    text.push(`<table>`);

    gridMouth.forEach((row, rowIndex) => {
      text.push('<tr>');

      row.forEach((tooths, toothsIndex) => {
        tooths.forEach((tooth) => {
          const idTooth: IdTooth = `${
            rowIndex + rowIndex + toothsIndex + 1
          }.${tooth}`;
          //

          text.push(`<td style=" padding: '5px', padding-bottom: '15px' ">`);

          text.push(`<div>`);
          text.push(stateMouth[idTooth].top ? '🟦' : '⬜');
          text.push(`</div>`);

          text.push(`<div>`);
          text.push(`${idTooth}`);
          text.push(`</div>`);

          text.push(`<div>`);
          text.push(stateMouth[idTooth].bottom ? '🔽' : '⬜');
          text.push(`</div>`);

          text.push(`</td>`);
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
  <table>
  <tr>
      <td>${fields.organization.title}</td>
      <td>${rawData.organization}</td>
  </tr>
  <tr>
      <td>${fields.customerName.title}</td>
      <td>${rawData.customerName}</td>
  </tr>
  <tr>
      <td>${fields.phone.title}</td>
      <td>${rawData.phone}</td>
  </tr>
  <tr>
      <td>${fields.actualAddressDelivery.title}</td>
      <td>${rawData.actualAddressDelivery}</td>
  </tr>
  <tr>
      <td>${fields.communicationApp.title}</td>
      <td>${
        fields.communicationApp.options &&
        fields.communicationApp.options[rawData.communicationApp]
      }</td>
  </tr>
  <tr>
      <td>${fields.patientName.title}</td>
      <td>${rawData.patientName}</td>
  </tr>
  <tr>
      <td>${fields.operationDate.title}</td>
      <td>${rawData.operationDate}</td>
  </tr>
  <tr>
      <td>${fields.kindOfWork.title}</td>
      <td>${
        fields.kindOfWork.options &&
        fields.kindOfWork.options[rawData.kindOfWork]
      }</td>
  </tr>
  <tr>
      <td>${fields.teethToggle.title}</td>
      <td>${rawData.teethToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr>
      <td>${fields.toothColor.title}</td>
      <td>${
        fields.toothColor.options &&
        fields.toothColor.options[rawData.toothColor]
      }</td>
  </tr>
  <tr>
      <td>${fields.prosthesisType.title}</td>
      <td>${
        fields.prosthesisType.options &&
        fields.prosthesisType.options[rawData.prosthesisType]
      }</td>
  </tr>
  <tr>
      <td>${fields.implantSystem.title}</td>
      <td>${rawData.implantSystem}</td>
  </tr>
  <tr>
      <td>${fields.implantProtocol.title}</td>
      <td>${
        fields.implantProtocol.options &&
        fields.implantProtocol.options[rawData.implantProtocol]
      }</td>
  </tr>
  <tr>
      <td>${fields.surgicalKit.title}</td>
      <td>${rawData.surgicalKit}</td>
  </tr>
  <tr>
      <td>${fields.pinSystem.title}</td>
      <td>${rawData.pinSystem}</td>
  </tr>
  <tr>
      <td>${fields.sleeveToggle.title}</td>
      <td>${rawData.sleeveToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr>
      <td>${fields.surgkitRentalToggle.title}</td>
      <td>${rawData.surgkitRentalToggle ? 'Да' : 'Нет'}</td>
  </tr>
  <tr>
      <td>${fields.implantGuides.title}</td>
      <td>${
        fields.implantGuides.options &&
        fields.implantGuides.options[rawData.implantGuides]
      }</td>
  </tr>
  <tr>
      <td>${fields.sourceFiles.title}</td>
      <td>${
        fields.sourceFiles.options &&
        fields.sourceFiles.options[rawData.sourceFiles]
      }</td>
  </tr>
  <tr>
      <td>${fields.comment.title}</td>
      <td>${rawData.comment}</td>
  </tr>
  <tr>
      <td>${fields.sourceFilesLink.title}</td>
      <td>${rawData.sourceFilesLink}</td>
  </tr>
  <tr>
      <td>${fields.reinforcementToggle.title}</td>
      <td>${rawData.reinforcementToggle ? 'Да' : 'Нет'}</td>
  </tr>
  </table>
  <div>${fields.teethGrid.title}</div>
  ${textGridMouth(gridMouth, rawData.teethGrid)}
  `;

  return text(fields, gridMouth, rawData);
};

export const sendForm = (rawData: FormValues) => {
  fetch(url, {
    method: 'POST',
    body: formatEmail(fields, mouth, rawData),
  });
};
