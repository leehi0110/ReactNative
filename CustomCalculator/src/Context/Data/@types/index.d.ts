interface ICalContext {
  form: Array<string>;
  calNumber: string;
  pair: number;
  result: number | undefined;
  padInput: (input: string) => void;
  calculate: () => void;
}
