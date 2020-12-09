interface ICalContext {
  form: Array<string>;
  number: number | 0;
  result: number | undefined;
  padInput: (input: string) => void;
  calculate: () => void;
}
