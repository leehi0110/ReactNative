import React, {createContext, useState, useEffect} from 'react';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const CalContext = createContext<ICalContext>({
  form: [],
  number: 0,
  result: undefined,
  padInput: (input: string) => {},
  calculate: (): void => {},
});

const CalContextProvider = ({children}: Props) => {
  const [form, setForm] = useState<Array<string>>([]);
  const [number, setNumber] = useState<number | 0>(0);
  const [result, setResult] = useState<number | undefined>(undefined);

  const padInput = (input: string): void => {
    if(input === '=') {

      const lastItem = form[form.length-1];
      if (
          lastItem !== '(' &&
          lastItem !== ')' &&
          lastItem !== '+' &&
          lastItem !== '-' &&
          lastItem !== '*' &&
          lastItem !== '/'
          ) {
            calculate();
          }
    } // 연산자가 = 일 경우 계산
    else if(input === 'C') {
      setForm([]);
      setNumber(0);
      setResult(undefined);
    } // 계산기 초기화
    else if(input === '+' || input === 'x' || input === '/' || input ==='-') {
      if(number !== 0) {
        const newForm = [...form,(number+''),input];
        setNumber(0);
        setForm(newForm); 
      }
    } // 연산자 입력
    else if(input === '(' || input === ')') {

      if(input === ')') {
        const newForm = [...form,(number+''),input]
        setNumber(0);
        setForm(newForm);
      }
      else {
        const newForm = [...form, input];
        setForm(newForm);
      }

    } // 괄호 입력
    else {
      setNumber(number*10 + Number(input));
    } // 번호 입력

    console.log(form);
  };

  const calculate = (): void => {
    // 입력된 값들을 가져와 계산하는 함수
    let postStack: Array<String> = []; // postfix로 만들기 위한 스택
    let postResult: Array<String> = []; // postfix로 만든 결과

    for(let i=0;i<form.length;i++) {
      if(form[i] === '(') {
      }
      else if(form[i] === ')') {
        postResult.push(postStack[postStack.length-1]);

        postStack.splice(postStack.length-1,1);
      }
      else if(form[i] === '+' || form[i] === '-') {
        if(postStack[postStack.length-1] === '*' || postStack[postStack.length-1] === '/'){
          postResult.push(postStack[postStack.length-1]);
          postStack.splice(postStack.length-1,1);
        }
        else {
          postStack.push(form[i]);
        }
      }
      else {
        if(postStack[postStack.length-1] === '+' || postStack[postStack.length-1] === '-'){
          postStack.push(form[i]);
        }
        else {
          postResult.push(postStack[postStack.length-1]);
          postStack.splice(postStack.length-1,1);
        }
      }

      if(i+1 == form.length) {
        for(let j=postStack.length-1;j>-1;j--){
          postResult.push(postStack[j]);
        }
      } // postStack 비우는 조건문
    }

    console.log(postResult.join(''));
  };

  return (
    <CalContext.Provider
      value={{
        form,
        number,
        result,
        padInput,
        calculate,
      }}>
      {children}
    </CalContext.Provider>
  )
}

export {CalContext, CalContextProvider};

