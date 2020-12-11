export function changePostfix(infix: string) {
  
  var postfix: Array<string> = [];
  var nowNumber: string = '';
  var stack: Array<string> = [];

  for(var item of infix) {
    
    if(isPriority(item) === 2) {
      nowNumber += item;
    } // 숫자일 경우
    else if(item === '(') {
      stackPush(stack,item);
    } // 여는 괄호
    else if(item === ')') {

      stackPush(postfix,nowNumber);
      nowNumber = '';
      
      while(1) {
        if(stackTop(stack) === '(') {
          var popVal = stackPop(stack);
          break;
        }
        else {
          stackPush(postfix,stackPop(stack));
        }
      }

    } // 닫는 괄호
    else {
      
      if(nowNumber !== ''){
        stackPush(postfix,nowNumber);
        nowNumber = '';
      }

      while(!isEmpty(stack) && isPriority(item) <= isPriority(stackTop(stack))) {
        stackPush(postfix,stackPop(stack));
      }

      stackPush(stack, item);

    } // 연산자일 경우
  }

  if(nowNumber !== ''){
    stackPush(postfix,nowNumber);
    nowNumber = '';
  }

  while(!isEmpty(stack)) {
    stackPush(postfix,stackPop(stack));
  }

  console.log(postfix);
  return postfix;
};

export function calculatePostfix(postfix: Array<string>) {

  
  var stack: Array<string> = [];

  for(var item of postfix) {

    if(isPriority(item) === 2) {
      stackPush(stack,item);
    } // 숫자일 경우 푸쉬
    else {
      var firstTopVal = Number(stackPop(stack));
      var secondTopVal = Number(stackPop(stack));

      if(item === '+') {
        stackPush(stack,(secondTopVal+firstTopVal)+'');
      }
      else if(item === '-') {
        stackPush(stack,(secondTopVal-firstTopVal)+'');
      }
      else if(item === 'x') {
        stackPush(stack,(secondTopVal*firstTopVal)+'');
      }
      else {
        stackPush(stack,(secondTopVal/firstTopVal)+'');
      }
    }
    
  }

  return stackPop(stack);

};

function isPriority(element: string) {
  if(element === '(' || element === ')') return -1;
  else if(element === '+' || element === '-') return 0;
  else if(element === 'x' || element === '/') return 1;
  else return 2; // element is number;
}

function isEmpty(stack:Array<string>) {
  if(stack.length === 0) return true;
  else return false;
}; // 스택이 비어있는지 확인하는 함수

function stackTop(stack:Array<string>) {
  return stack[stack.length-1];
}; // 스택의 Top Element를 반환하는 함수

function stackPop(stack: Array<string>) {
  var returnVal = stack[stack.length-1];
  stack.splice(stack.length-1,1);

  return returnVal;
}; // 스택의 Top Element를 Pop하는 함수

function stackPush(stack: Array<string>, element: string) {
  stack.push(element);
}; // 스택에 Element를 push 하는 함수
