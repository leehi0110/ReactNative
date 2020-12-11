import React, {createContext, useState, useEffect} from 'react';
import * as func from '~/Context/common/common';

const CalContext = createContext<ICalContext>({
  form: '',
  pair: 0,
  nowNumber: '',
  result: '',
  padInput: (input: string) => {},
});

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const CalContextProvider = ({children}: Props) => {
  const [form, setForm] = useState<string>('');
  const [pair, setPair] = useState<number>(0);
  const [nowNumber, setNowNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const padInput = (input: string):void => {

    var lastInput: string;

    if(isNaN(Number(input))) {

      if(result !== '') {
        setResult('');
      }

      lastInput = form[form.length-1];

      if(input === '(') {
        if(isNaN(Number(form[form.length-1]))) {
          setPair(pair+1);
          setForm(form+input);
        } // 이전 입력이 연산자일 경우 입력을 받는다.
        else {
          console.log('Error: 이전 입력이 피연산자 입니다');
        }
      }
      else if(input === ')') {

        if(pair === 0) {
          console.log('Error: 식에 여는 괄호가 존재 하지 않습니다');
        }
        else if(form.length === 0) {
          console.log('Error: 첫 입력에 닫는 괄호를 입력할 수 없습니다');
        }
        else if(lastInput === '+' || lastInput === '-' || lastInput === 'x' || lastInput === '/') {
          console.log('Error: 연산자 다음에 닫는 괄호가 올 수 없습니다');
        }
        else {
          setPair(pair-1);
          setForm(form+input);
          setNowNumber('');
        }
      }
      else if(input === 'C') {
        setPair(0);
        setForm('');
        setNowNumber('');
      } // 초기화
      else if(input === '='){

        if(pair !== 0) {
          console.log('Error: 괄호의 짝이 맞지 않습니다');
        }
        else if(lastInput === '+' || lastInput === '-' || lastInput === 'x' || lastInput === '/' || lastInput === '('){
          console.log('Error: 이전 입력이 연산자 입니다');
        }
        else {
          var postfix = func.changePostfix(form);
          var calculateResult = func.calculatePostfix(postfix);

          setResult(calculateResult);
          setForm(calculateResult);
          setNowNumber(calculateResult);
          setPair(0);
        }
      }
      else {
        if(form.length === 0) {
          console.log('Error: 식에 처음값은 피연산자여야 합니다');
        }
        else if(lastInput === '(' || lastInput === '+' || lastInput === '-' || lastInput === 'x' || lastInput === '/') {
          console.log('Error: 이전 입력이 "(" 를 포함한 연산자 입니다');
        }
        else {
          setForm(form+input);
          setNowNumber('');
        }
      }
    } // 입력이 연산자
    else {

      if(result !== '') {
        setResult('')
        setNowNumber('');
      }

      setNowNumber(nowNumber+input);
      setForm(form+input);
    } // 입력이 숫자

    // ts에서는 isNaN()의 파라미터로 Number타입만 받을 수 있다
    // 따라서, Number()를 이용하여 변환한 뒤 isNan을 사용한다.
    // 숫자로 변환될수 없는 문자는 NaN이라는 타입으로 리턴된다.
  };

  return (
    <CalContext.Provider
      value={{
        form,
        pair,
        nowNumber,
        result,
        padInput,
      }}>
      {children}
    </CalContext.Provider>
  );
};

export {CalContextProvider, CalContext};