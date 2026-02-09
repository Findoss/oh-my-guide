export type FormValues = {
  organization: string;
  customerName: string;
  phone: string;
  actualAddressDelivery: string;
  communicationApp: string;
  patientName: string;
  operationDate: string;
  kindOfWork: string;
  teethToggle: boolean;
  implantSystem: string;
  implantProtocol: string;
  surgicalKit: string;
  pinSystem: string;
  sleeveToggle: boolean;
  sourceFiles: string;
  comment: string;
  sourceFilesLink: string;
  toothColor: string;
  prosthesisType: string;
  reinforcementToggle: boolean;
  teethGrid: StateMouth;
};

export type FiledData<T> = {
  name: T;
  title: string;
  placeholder?: string;
  hint?: string;
  options?: Record<string, string>;
};

export type FieldsData = Record<keyof FormValues, FiledData<keyof FormValues>>;

export type IdTooth = `${number}.${number}`;

export type StateMouth = Record<
  IdTooth,
  {
    top: boolean;
    bottom: boolean;
  }
>;

export type GridMouth = [[number[], number[]], [number[], number[]]];
