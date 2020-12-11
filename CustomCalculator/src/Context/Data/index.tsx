import { parseSync } from '@babel/core';
import React, {createContext, useState, useEffect} from 'react';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const CalContext = createContext<ICalContext>({
  form: [],
  calNumber: '',
  pair: 0,
  result: undefined,
  padInput: (input: string) => {},
  calculate: (): void => {},
});

const changePostfix = (infix:Array<string>): Array<string> => {

  let postfix: Array<string> = [];

  let stack: Array<string> = [];
  let topIndex: number = -1;

  for(let item of infix) {
    if(item === '(') {
      topIndex++;
      stack[topIndex] = item;
    }
    else if(item === ')') {

      while(1) {

        var topEle = stack[topIndex];
        stack.splice(topIndex,1);
        topIndex--;

        if(topEle === '(') {
          break;
        }
        else {
          postfix.push(topEle);
        }
      }

    }
    else if(isPriority(item) === 0 || isPriority(item) === 1) {

      while(topIndex !== -1 && isPriority(stack[topIndex]) >= isPriority(item)) {
        var topEle = stack[topIndex];
        stack.splice(topIndex,1);
        topIndex --;

        postfix.push(topEle);
      }

      topIndex++;
      stack[topIndex] = item;

    }
    else {
      postfix.push(item);
    }
  }

  for(let i = topIndex;i>-1;i--) {
    postfix.push(stack[i]);
  }
  return postfix;
} // 후위수식으로 바꾸기 위한 함수

const calPostfix = (postfix:Array<string>): number => {

  let calResult: number = 0;

  let stack: Array<string> = [];
  let topIndex: number = -1;

  for(let i=0;i<postfix.length;i++){
    if(isPriority(postfix[i]) === 4) {
      topIndex++;
      stack[topIndex] = postfix[i];
    }
    else {
      var calVal: number;

      if(postfix[i] === '+') {
        calVal = Number(stack[topIndex-1]) + Number(stack[topIndex]);
      }
      else if(postfix[i] === '-') {
        calVal = Number(stack[topIndex-1]) - Number(stack[topIndex]);
      }
      else if(postfix[i] === 'x') {
        calVal = Number(stack[topIndex-1]) * Number(stack[topIndex]);
      }
      else { // postfix[i] === '/'
        calVal = Number(stack[topIndex-1]) / Number(stack[topIndex]);
      }

      stack.splice(topIndex-1,2);
      topIndex --;
      stack[topIndex] = calVal +'';
    }
  }

  return Number(stack[topIndex]);
}

const isPriority = (input: string): number => {
  if(input === '(' || input === ')') return -1;
  else if(input === '+' || input === '-') return 0;
  else if(input === '/' || input === 'x') return 1;
  else if(input === '=') return 2;
  else if(input === 'C') return 3;
  else return 4; // 숫자
}

const CalContextProvider = ({children}: Props) => {
  const [form, setForm] = useState<Array<string>>([]);
  const [calNumber, setCalNumber] = useState<string>('');
  const [result, setResult] = useState<number | undefined>(undefined);
  const [pair, setPair] = useState<number>(0);

  const padInput = (input: string) => {

    const topIndex: number = form.length -1; // 식의 마지막 인덱스

    if(input === '(' || input === ')') {
      if(input === '('){
        if(calNumber === '') {
          setForm([...form,input]);
          setPair(pair+1);
        }
        else console.log('( input invaild');
      }
      else { // input === ')'
        if(form.length === 0) console.log(') input invaild');
        else if(isPriority(form[topIndex]) === 0 || isPriority(form[topIndex]) === 1) {
          console.log(') input invaild');
        }
        else if(pair === 0) console.log(') input invaild');
        else {
          setForm([...form,input]);
          setPair(pair-1);
        }
      }
    }
    else if(input === '+' || input === '-' || input === 'x' || input === '/') {
      if(form.length === 0) console.log('+ - x / input invaild');
      else if(form[topIndex] === ')' || isPriority(form[topIndex]) === 4) {
        setForm([...form,input]);
      }
      else {
        console.log('+ - / x input invaild');
      }
    }
    else if(input === '=') {
      setResult(0);
    }
    else if(input === 'C') {
      setForm([]);
      setCalNumber('');
      setResult(undefined);
    }
    else { // input === 'number'
      if (form.length === 0) setForm([input]); // 아무것도 없을때
      else if (form[topIndex] === '(') {
        setForm([...form,input]);
      } // 앞이 열린 괄호
      else if(form[topIndex] === ')') {
      } // 앞이 닫힌 괄호
      else if(isPriority(form[topIndex]) === 0 || isPriority(form[topIndex]) === 1) {
        setForm([...form,input]);
      } // 앞이 연산자
      else if(isPriority(form[topIndex]) === 4) {
        
        var lastNumber: string = form[topIndex];
        let newForm: Array<string> = form;
        newForm.splice(topIndex,1);

        setForm([...newForm,(lastNumber+input)]);

      }
    }
  };

  const calculate = (): void => {

    const postfix = changePostfix(form);
    const calReult = calPostfix(postfix);

    setResult(undefined);
    setForm([]);
    setCalNumber(calReult+"");
    setForm([calReult+'']);
  };

  useEffect(() => {
    if(result === 0) calculate();
  },[result]);

  return (
    <CalContext.Provider
      value={{
        form,
        calNumber,
        pair,
        result,
        padInput,
        calculate,
      }}>
      {children}
    </CalContext.Provider>
  )
}

export {CalContext, CalContextProvider};

